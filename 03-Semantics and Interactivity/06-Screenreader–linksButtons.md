#  Screen reader–friendly links and buttons

Read more links, and close modal buttons, and next and previous buttons, and blocks of texts where we have links inside that sound like I've written more about this topic here, and here, and here, are good examples of when we might want to hide content from visual browsers while providing further context and improve accessibility to people using screen readers.

Those links typically have non-specific text like "read more" or "continue reading", because the design and content hierarchy clearly associate the link with the article snippet. This is not great for people using screen readers and other accessibility tools, because it produces a long list of links that just say continue reading without any further context.

The most straightforward way of doing this is that screen reader only CSS class that I talked about previously in the course. We can apply this to any content we want to hide from the visual browser, but make available to screen readers. In practice, it looks like this.

```css
/* Screen reader only */
.sr-only {
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
}
```

```html
<a href=”/pickle-health.html”>
Continue reading <span class=”sr-only”>pickled-cheese is healthy.</span>
</a>
```

We can apply this to any content we want to hide from the visual browser, but make available to screen readers. In practice, it looks like this. You have your continue reading link, and then you set up a span with a class sr-only, and then you put the name of the article or whatever else you're pointing at inside that span. That way, the visual browser won't see that content, but a screen reader will read out.

This works for both links and for buttons, and it works the exact same way. Wrap the content you want to hide from visual browsers inside a span, then put on the sr-only class, and it automatically gets hidden from visual browsers, but read out by screen readers.

```html
<button id=’close modal’>
<svg>{…}</svg>
<span class=”sr-only”>Close order form modal popup</span>
</button>
```

When using screen reader only or visually hidden classes like this one, try to place all the screen reader text either before or after the visual text to avoid potential problems. Sometimes in rare cases, if you have a little bit of screen reader text, and then some regular text, and then more screen reader text, and you just keep interchanging between them, it gets read out in a very strange way by screen readers






