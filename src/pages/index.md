---
permalink: /
image:
  name: Lemon
  src: lemon.jpg
  alt: Lemon on lemon-colored surface
  author:
    url: "https://unsplash.com/@markusspiske"
    name: "@markusspiske"
tags: ["photos"]
---
This site uses a very simple system for notifying visitors of new or updated content, built with [Eleventy], a little bit of vanilla JavaScript, and some good, old-fashioned [CSS].

## What it does

A link styled as a notification icon should appear in the upper right corner of every page; the accompanying link in the site footer will also be badged. 

These small bits of UI are intended to alert visitors about new content they might be interested in and guide them toward the appropriate page. (As of the most recent [site deployment], that's at [`{{ (notifications | last).url }}`]({{ (notifications | last).url }})).

Visiting the page will mark the notification as seen, suppressing the icon and badge until a new notification is defined and deployed.

[Eleventy]: https://11ty.dev
[CSS]: https://css-tricks.com/css-is-in-fact-awesome/
[site deployment]: https://github.com/ashur/notification-demo/blob/main/src/_data/notifications.json
