# Making embedded videos more accessible 

This type of content is usually embedded from a dedicated service like YouTube and this embedding introduces some tricky problems for performance, usability and accessibility perspectives.

*	The embed, an iFrame, will load even when the visitor never actually watches the video. So that's a performance issue. 
*	The embed slows down rendering of the page and can introduce errors. Again, a performance and usability issue. 
*	And because the embed is an iFrame, if a visitor navigates using a keyboard they may get trapped inside the iFrame and have a hard time exiting back into the main page even if they have no interest in the video.

In the case of a YouTube video, for example, they have to navigate through all the different controls inside the YouTube video before getting back into the regular page. And this is a serious accessibility issue.

One of the ways to get around these problems is the surprisingly obvious solution of not loading the embedded media unless the visitor actively interacts with it. Now this can be done with some clever manipulation of the iFrame code. Let me show you what that looks like. So here I've embedded a YouTube video. Looks like an embedded YouTube video, and I can click the play button. And when I click the play button, the iFrame is actually loaded into the browser. That means when I reload this page here, what you're looking at right now is just a button. There is a single button here and nothing else. So if I tap through this, I would tap into the button and then out into the rest of the content. There's no video being played here at all.

The idea here is as simple as it is novel. Inside this iFrame, I load an image with a button on top of it. Then if and when that button is clicked, I go and load the embedded content, which is the video in this case, could be audio, could be something else. This is possible thanks to the srcdoc iFrame attribute which defines the content of the iFrame. Let's look at the code to see what's actually happening here.

```html
<iframe
        width="720"
        height="540"
        src="https://www.youtube.com/embed/Buw4vOXcr_4"
        srcdoc="
      <style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
          <a href=https://www.youtube.com/embed/Buw4vOXcr_4?autoplay=1>
            <img 
              src=https://img.youtube.com/vi/Buw4vOXcr_4/hqdefault.jpg 
              alt='Video: Variable Fonts Explained'>
            <span>&#x25BA;</span>
          </a>"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Variable Fonts Explained"
        loading="lazy"
></iframe>
```

So we have a standard iFrame setup with a width and a height and the source of the iFrame itself. Nothing new here. Then we have this srcdoc attribute. And inside the srcdoc attribute, I've actually set up an entire webpage. So we have some inline styling. This just defines what the page is going to look like. There's a link. In the link we're pointing out the embed and setting it to autoplay. Then there's an image that displays the YouTube preview window. Then there's an image that displays the YouTube thumbnail. There's an alt attribute that describes the video. And then at the bottom here there's a span that has this weird piece of code here which just creates that little play arrow that you see. So what's happening here is when this iFrame loads, all we're loading up is this custom document that was built inside the srcdoc here.

Then when the link is clicked, we navigate to the actual content which is the embedded YouTube video. And that's why when I click it, the YouTube video plays. The reason it plays is because autoplay is set to equal one.

One warning, though, this approach does require you to not use the embed code from YouTube. Because if you go to YouTube and go down to share, you can get an embed code right here, but the code that I just showed you is not this embed code at all.    
