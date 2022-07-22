# Links

A link is an anchor tag with an href attribute containing the target URL either to a location in the current document or to a new document. Click the link and the browser navigates to the specified location. We can further specify the functionality of a link using URL schemes,

* <a href=”/about”>About our store</a> - href navigates window to URI location
* <a href=”tel:+15558675309”>Call our store</a> - Engages phone capability on device to call provided number
* <a href=”mailto:store@pickledcheese.net”>Contact our store</a> - Engages email capability on device to start new email to provided address.
* <a href=”/cheese-menu.pdf” download>Download </a> - Triggers download of specified asset. 
* <a href=”/about” target=’_blank’>About our store</a> - controls what window the link is being opened. The target attribute has often been used to open a link in a new window, but this is an accessibility anti-pattern because it navigates the user away from the context they're currently in with no clear way of getting back. So, it's not recommended to do what you're seeing here on the screen, target blank.
  

Links are blue text with an underline by default. While it's recommended to change the color, and font, and size and all the other visual aspects of the link it's not recommended to remove the underlines unless you have a good reason to, as in the link is sitting inside a box that's a button in a menu or something else. That underline is an accessibility feature indicating this text is a link so it should always be preserved for text links.
