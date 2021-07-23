---
permalink: /
image:
  src: balloon.jpg
  alt: Single red balloon floating at sunset
  author:
    url: "https://unsplash.com/@denisseleon"
    name: "@denisseleon"
---
This site uses a very simple system for notifying visitors of new or updated content, built with [Alpine], [Eleventy], and some good, old-fashioned [CSS].

A link styled as a notification should appear in the upper right corner of every page; the accompanying link in the footer will be badged.

These will persist throughout the site until you navigate to the URL specified in the latest [notification](https://github.com/ashur/notification-demo/blob/main/src/_data/notifications.json):

```
{{ notifications | last | dump | safe }}
```

Visiting `{{ (notifications | last).url }}` will mark that notification as seen, suppressing notification UI until a new notification is defined and deployed.

[Alpine]: https://alpinejs.dev
[Eleventy]: https://11ty.dev
[CSS]: https://css-tricks.com/css-is-in-fact-awesome/
