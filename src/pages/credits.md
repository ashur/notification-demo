---
title: Credits
image:
  name: Typewriter
  src: typewriter.jpg
  alt: Light blue typewriter on wooden surface
  author:
    url: "https://unsplash.com/@laurar1vera"
    name: "@laurar1vera"
tags: ["pages", "photos"]
---

## Icon

- Bell icon by [Alice Design](https://thenounproject.com/icon/3407997/)

## Photos
{% for page in (collections.photos | sort) %}
- {{ page.data.image.name if page.data.image.name else page.data.title }} by [{{ page.data.image.author.name }}]({{ page.data.image.author.url }})
{% endfor %}

## Text

- All filler text sourced from Wikipedia.
