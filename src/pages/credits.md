---
title: Credits
image:
  name: Bookshelf
  src: books.jpg
  alt: Bookshelf crammed with colorful books
  author:
    url: "https://unsplash.com/@riapuskas"
    name: "@riapuskas"
tags: ["pages", "photos"]
---

Thanks to all these folks for making their work available.

## Icons

- Bell by [Alice Design](https://thenounproject.com/icon/3407997/)

## Photos
{% for page in (collections.photos | sort) %}
- {{ page.data.image.name if page.data.image.name else page.data.title }} by [{{ page.data.image.author.name }}]({{ page.data.image.author.url }})
{% endfor %}

## Text

- All filler text copypasta'd from Wikipedia.
