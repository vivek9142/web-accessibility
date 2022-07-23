# Accessible SVG 

Anytime you have a vector graphic you want to add to your website or app, you probably want to use an SVG because of its many benefits including scalability, performance, CSS styling, et cetera. If the SVG is just an image and functions like an image, you can display it using an image element and add all text for non-visual browsers and a figcaption inside a figure if necessary. But the main advantage of an SVG is it's a native HTML element, so it doesn't have to be   wrapped inside an image or figure.

SVG is a standalone web document which can be embedded into an HTML document, the SVG can contain its own title and description elements. We can then use the aria-describedby attribute to direct screen readers and other assistive technologies to pull out these text elements and read them. Here's an example of that. So we have a standard SVG, then inside the SVG declaration we have aria-labelledby, followed by a list of IDs, so icontitle and icondesc. These points add the ID for the title element and the description element, and when a screen reader comes to this SVG, it will say, "Oh, the SVG is described by these elements. I'll just read out what's in these elements."
 

```html
    <svg role="img" aria-labelledby="icontitle icondesc" (...)>
        <title id="icontitle">Pickling Solution</title>
        <desc id="icondesc">
            The secret to good pickled cheese is good pickling.
        </desc>
        <!-- SVG content -->
    </svg>
```