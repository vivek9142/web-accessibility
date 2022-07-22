#  Icon links and buttons with SVG 

There are many situations where we want to display a link or a button using an icon with or without accompanying text. A classic example is a social media link where the standard practice is to display the icon of the social network rather than spell out, follow me on the social network in text. 
For both links and buttons, the first step here is to use SVG for the icon. There are a myriad of reasons for using SVG's including, they are a native graphics format to the web platform, they're stylable using CSS and you can make SVGs accessible. There are also good reasons not to use alternative methods like icon fonts including the fact, they are fonts and therefore texts and screen readers will try to read them out. And that icon fonts are non-standard approach to something we have a standard for, namely SVGs.

Let's look at a couple of examples. First, an icon on its own without any visible text. Since we're linking to an external resource, we'll use a link here. Here, the aria-label attribute on the link defines what the screen reader will read out. Now, this solution does not actively spell out the word, LinkedIn anywhere in the element. 

```html
<a href=”https:linkedin.com” aria-label="Go to Linkedin">
	<svg aria-hidden=”true” focusable=”false” (…)>
        <!-- SVG content -->
    </svg>
</a>
```
 
So, if CSS fails and the icon is not displayed for some reason, the visitor will get no meaningful content which is not great but that's a fairly edged case scenario. So, this is a workable solution you may want to use. An alternative is to use a visually-hidden-class to hide the text inside the element. Now we have actual texts in the element that's being hidden using CSS. And if we wanted to later display the text or display it in some other scenario, we can just take away that visually-hidden class. And we get an icon individual browser, go to the social network and screen readers and go to the social network if no CSS is available. Both of these approaches work well for buttons and links with icons.
 
```html
<a href=”https:linkedin.com”>
    <svg aria-hidden=”true” focusable=”false” (…)>
        <!—SVG content -->
    </svg>
    <span class=”visually-hidden”>Go to Linkedin</span>
</a>
```

But what if we're in a scenario where we want to hide some extra screen reader texts from the visual browser? Let's say, there's a "print this page" button somewhere on a page. And we want to have a display, an icon for a printer and then print this page in the visual browser and the read out print and then the name of the page in the screen reader so the screen reader user actually knows what they're going to print. In that scenario we can mix different approaches. So, here we first have the word "print". Then we have a span wrapping around the words, "this page" and this piece of text is hidden using aria-hidden-true, meaning the words "this page" will be displayed in visual browsers, but will not be read out by screen readers. Then below we have the span of the class visually hidden and here we have the name of the article. As a result the screen reader will read out "print pickled cheese recipes" while visual browsers will display the text, "print this page".

```html
<button>
        <svg aria-hidden=”true” focusable=”false” (…)>
            <!--SVG content -->
        </svg>
    Print <span aria-hidden=”true”>this page</span>
    <span class=”visually-hidden”>Go to Linkedin.</span>
</button>
```
