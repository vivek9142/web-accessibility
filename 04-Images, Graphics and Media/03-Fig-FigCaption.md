# The figure and figcaption elements

In many cases, you'll have one or more images that include a caption describing or otherwise contextualizing the visuals. For this scenario, we have two dedicated elements: figure and figcaption. 

The figure element wraps around one or more image elements and can contain an optional figcaption element. In screen readers, it's declared as a figure followed by whatever images and captions it contains. The purpose of the figure and figcaption elements is to associate the caption with the images, otherwise it would be an image and then a separate text block and there's no clear connection between them. 

But using figure and figcaption, there is a clear connection because they belong together as a whole. The figcaption can contain any other HTML element including links, headings, and so on. This means if you have an image and some associated texts and you want them to be wrapped inside a container, the best option is probably to use a figure element.

```html
<figure>
    <!-- Alternative text provided if the image cannot be displayed -->
    <img src="/store.jpg" alt="The Pickled Cheese store, front-view."/> 
    <img src="/inside.jpg" alt="The Pickled Cheese store, inside-view."/> 
    <img src="/customers.jpg" alt="Customers at the Pickled Cheese store."/> 

    <!-- Caption displayed by visual browsers and read out by screen readers-->
    <figcaption>
        Photos of the original Pickled Cheese store when it first opened in 1814.
    </figcaption>
</figure>
```
 

The great thing about the figure element is its versatility. If you have an image and it needs a wrapper, use a figure, because that's what it's for. If you have an image that needs a caption, use a figure and figcaption, because that's what they're for. If you have a group of images belonging together, maybe with a caption describing all the images or just the group of images belonging in a single block, use a figure, because that's what it's for. 
The figure element doesn't impulse any type of styling or other features on the images or caption inside with the exception of ample margin around the figure element. So in most cases, I reset the figure element with a global rule set like this.

```css
Figure {
margin:0;
}
```

that way the figure is just a regular block element that I can work with like any other block element.

