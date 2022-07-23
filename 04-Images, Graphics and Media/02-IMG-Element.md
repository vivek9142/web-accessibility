# The img element

The img element is an inline replaced element used to display a supportive image file within a container. It has two required attributes; source which holds a URI to the image file location and alt which holds the alternative text provided if the image is not displayed. It also has a series of optional attributes.

```html
<img
    src="/store.jpg"                //Required
    alt="The Pickled Cheese store"  //Required
    width="415"                     //Optional (but useful)
    height="283"                    //Optional (but useful)
    srcset="(...)"                  //Optional (but useful)
    sizes="(...)"                   //Optional (but useful)
    loading="lazy">                 //Optional (but useful)
```
 
A good rule of thumb when using the image element is to always define the source, alt, width and height attributes and also take advantage of source set and sizes anytime you're working with large images. It's also standard practice to declare a Global CSS reset for the image element.

```css
/*Standard*/
img {
    display: block;
    width:100%;
    height:auto;
}

/*Modern CSS remedy*/
img {
    display: block;
    vertical-align:middle;
    max-width: 100%;
    height:auto;
}
```
It's also standard practice to declare a Global CSS reset for the image element. Display block width 100% and height auto. Now there is a more modern CSS remedy which displays the image element in a way many developers believe browsers should display images. I tend to use the first one, but the remedy is gaining more traction and has some really good ideas behind it. So you might want to shift towards that and see how that works for you. Both of these resets make all images, responsive, block level elements out of the box so they can be further styled later in the style sheet.

The image element also accepts a title attributes though it's not recommended for use and here's why. The title attribute usually appears as a tool tip if you hover over the image with your mouse or your cursor but you can't assume anyone will ever see it. So while it's not technically wrong to use an title attribute on an image, in almost every case it's pointless information will never be seen by anyone and has no purpose.

All image elements require the alt attribute to be defined. This attribute provides a text description of the image when the image is not displayed. That means when a search engine crawls your site it will index to all text and associated with your image and your site.

If you have an image and there's actual content in the alt attribute, you can change the aria role of the image depending on what the function of that image is. You can change the image from just an image to a button or a checkbox or a link or a menu item, or a bunch of other options. There's a full list of this on MDN. Just remember, changing the aria role of an image element, results in the screen reader declaring the image based on that new definition. So instead of saying image, it would say button or checkbox or menu item or something else which gives you a lot more power to communicate with screen readers, even though you're still using an image.

Always use the accessibility mindset when you populate concept on the web img 'cause it will help you build better content.

