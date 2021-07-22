---
title: Intro
permalink: /
---
This site uses a very simple system for notifying visitors of updated content on one of its pages, built with [Alpine], [Eleventy] (and some good, old-fashioned [CSS]).

A link <!-- styled as a notification --> should appear in the upper right corner of every page, and will persist throughout until you navigate to the URL defined in the latest notification (currently `{{ (notifications | last).id | safe }}`):

```
{{ notifications | dump | safe }}
```

Visiting the page linked from the notification will save the 

To reset the demo, click this button on any page:

[Alpine]: https://alpinejs.dev
[Eleventy]: https://11ty.dev
[CSS]: https://css-tricks.com/css-is-in-fact-awesome/
