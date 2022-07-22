# Buttons

In its most basic form a button on the web does nothing except be present and clickable. It doesn't have a default behavior because it can be used for many different things. To get a button, to do something it needs to be hooked to an existing browser or document or element behavior or some custom JavaScript. 

Buttons exist to be used anytime you need interactivity that doesn't involve navigation. But I often see developers use links instead of buttons in these instances. And when I ask the reason they provide is often that they don't like what a button looks like out of the box.

So to remove this problem altogether here's a full button style reset for you. 

```css
/* Button reset */
button {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  overflow: visible;
  text-transform: none;
  -webkit-appearance: button;
  border: 0;
  background: none;
}

button:hover {
  /* Mouse behavior like link */
  cursor: pointer;
}

button:hover,
button:focus,
button:active {
  background: none;
  border-color: inherit;
  border-radius: 0;
}
```

This block of code removes all default styling from the button except for the focus state and allows you to style it however you choose. Now, in most cases this full reset is excessive but it does give you a full picture of what user agent styles the browser provides out of the box. 

For my own projects I typically 
*	create a global default button style for the entire site and then 
*	use classes to apply custom styling where necessary.
*	And in most cases, I try to modify the default appearance of a button to fit my style rather than do a full reset because then I have to build everything else up again from scratch which is a lot of work. That works in some cases, but not in all cases.
The close button in a modal window, for example, usually requires a full reset and custom styles because otherwise it just doesn't look right in this context. 

Using a button when you're creating a button type behavior gives you automatic button accessibility and clear separation of concerns between navigation and interactivity. It also excludes the interactive behavior from the list of links on the page.
