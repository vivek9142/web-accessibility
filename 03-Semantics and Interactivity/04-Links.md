# Links

A link is an anchor tag with an href attribute containing the target URL either to a location in the current document or to a new document. Click the link and the browser navigates to the specified location. We can further specify the functionality of a link using URL schemes,

* &lt;a href=”/about”&gt;About our store&lt;/a&gt; - href navigates window to URI location
* &lt;a href=”tel:+15558675309”>Call our store&lt;/a&gt; - Engages phone capability on device to call provided number
* &lt;a href=”mailto:store@pickledcheese.net”&gt;Contact our store&lt;/a&gt; - Engages email capability on device to start new email to provided address.
* &lt;a href=”/cheese-menu.pdf” download&gt;Download &lt;/a&gt; - Triggers download of specified asset. 
* &lt;a href=”/about” target=’_blank’&gt;About our store&lt;/a&gt; - controls what window the link is being opened. The target attribute has often been used to open a link in a new window, but this is an accessibility anti-pattern because it navigates the user away from the context they're currently in with no clear way of getting back. So, it's not recommended to do what you're seeing here on the screen, target blank.
  

Links are blue text with an underline by default. While it's recommended to change the color, and font, and size and all the other visual aspects of the link it's not recommended to remove the underlines unless you have a good reason to, as in the link is sitting inside a box that's a button in a menu or something else. That underline is an accessibility feature indicating this text is a link so it should always be preserved for text links.
