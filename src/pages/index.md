---
permalink: /
image:
  src: lemon.jpg
  alt: Lemon on lemon-colored surface
  author:
    url: "https://unsplash.com/@markusspiske"
    name: "@markusspiske"
---
This site uses a very simple system for notifying visitors of new or updated content, built with [Alpine], [Eleventy], and some good, old-fashioned [CSS].

A link styled as a notification icon should appear in the upper right corner of every page; the accompanying link in the site footer will also be badged. These bits of UI are intended to alert visitors there is new content they might be interested in. (As of the most recent site deployment, that's at [`{{ (notifications | last).url }}`]({{ (notifications | last).url }})).

Visiting that page will mark the notification as seen, suppressing both the icon and the badge from being displayed until a new notification is defined and deployed.

[Alpine]: https://alpinejs.dev
[Eleventy]: https://11ty.dev
[CSS]: https://css-tricks.com/css-is-in-fact-awesome/
