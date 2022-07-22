# How to hide visual content

For Screen readers read out what’s visible on the screen. If something is set to display:none  or otherwise hidden, screen readers will not read this content.

That means the immediately obvious methods for hiding content from the browser like using CSS to set the display property to none or setting the visibility property to hidden or adding the hidden element attributes to an element. They do not work because the content is now also hidden from screen readers. Other tricks like setting opacity to zero also don't work because now we have content that still takes up space and if you set the width and height of an element to zero the screen reader probably won't read it because it's considered not present on the screen it's trying to read.

The best way around this problem is a rather clever CSS hack. Create a CSS rule set with an obvious name like screen reader only, or SR only, or screen reader text or something like that and set up what you see here.

```css
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

This way the content still exists in the flow but it's tucked away in a place a visual user can't see using CSS. Now you can apply this SR only class to any element that needs to be hidden from view knowing it's still accessible in the screen reader because it's technically still on the page it's just that it's clipped in such a way that you can't see it.

