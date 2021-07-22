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
