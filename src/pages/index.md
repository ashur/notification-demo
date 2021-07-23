---
permalink: /
image:
  src: light.jpg
  alt: Close up of red light on wall
  author:
    url: "https://unsplash.com/@possessedphotography"
    name: "@possessedphotography"
---
This site uses a very simple system for notifying visitors of new or updated content, built with [Alpine], [Eleventy] (and some good, old-fashioned [CSS]).

A link styled as a notification should appear in the upper right corner of every page, and will persist throughout until you navigate to the URL defined in the latest notification (currently `{{ (notifications | last).id | safe }}`):

```
{{ notifications | dump | safe }}
```

Visiting the page linked from the notification saves the notification ID to `localStorage`, ensuring that it is no longer shown to the visitor.

[Alpine]: https://alpinejs.dev
[Eleventy]: https://11ty.dev
[CSS]: https://css-tricks.com/css-is-in-fact-awesome/
