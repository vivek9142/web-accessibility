# Link and button basics

HTML has two elements dedicated to direct interactivity as in click or touch or interact with this element and something happens: the anchor tag or link and the button element. Out of the box, they present quite differently. 

*	The link is a string of blue text with an underline and it changes colors depending on the state. 
*	The button is a somewhat skeuomorphic button that simulates the appearance of an actual physical button that is being pressed into the page and then pops back up again. 

Both links and buttons have various states with corresponding CSS pseudo classes.

*	:hover – The user hovers a pointing device (mouse) over the item.
*	:active -  The item is activated  by the user clicking or selecting it.
*	:focus – The element currently has focus (is selected)

links also have link-specific pseudo classes that describe the link's relationship to what's happening in the browser.

*	:link – the link target has not been visited.
*	:visited – The Link target has been visited.
*	:local-link – The absolute URL of the current page and link target match.

links and buttons look so different, we often choose to use either a link or a button depending on what we want the end result to look like. That's not necessarily the best strategy because it might introduce unintended problems for our users and add more complexity to the development process because links have specific purposes and buttons have other specific purposes.

