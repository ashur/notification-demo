const Image = require( "@11ty/eleventy-img" );
const markdownIt = require( "markdown-it" );

module.exports = config =>
{
	/* Static files */
	config.addPassthroughCopy( { "src/static": "/" } );

	/* Markdown */
	let markdownOptions = {
		html: true,
		breaks: false,
		typographer: true,
	};

	let markdownLibrary = markdownIt( markdownOptions )
		.disable( "code" );

	markdownLibrary.use( require( "markdown-it-attrs" ) );

	config.setLibrary( "md", markdownLibrary );

	/* Filters */

	/* Shortcodes */
	config.addAsyncShortcode( "Image", async (src, alt, sizes="100vw") =>
	{
		if( alt === undefined )
		{
			throw new Error( `Missing 'alt' on ${src}` );
		}

		let metadata = await Image( src,
		{
			widths: [300, 600, 900, 1200],
			formats: ['webp', 'jpeg'],
			outputDir: "dist/images",
			urlPath: "/images/"
		});

		let lowsrc = metadata.jpeg[0];
		let highsrc = metadata.jpeg[ metadata.jpeg.length - 1 ];

		return `<picture>
		${Object.values(metadata).map(imageFormat => {
		  return `  <source type="${imageFormat[0].sourceType}" srcset="${imageFormat.map(entry => entry.srcset).join(", ")}" sizes="${sizes}">`;
		}).join("\n")}
		  <img
			src="${lowsrc.url}"
			width="${highsrc.width}"
			height="${highsrc.height}"
			alt="${alt}"
			loading="lazy"
			decoding="async">
		</picture>`;
	});

	return {
		dir: {
			input: "src",
			output: "dist",
		},

		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",

		templateFormats: ["css", "md", "njk"],
	};
};
