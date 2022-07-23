# Images, graphics, and media basics 

Visual media plays a central role on the web. And the web platform has a myriad of tools to make handling and communication of images, graphics, video, and audio both functional and accessible. The key is to take full advantage of what's provided by the platform and extend that functionality where necessary. 

Web-based media fall into two main categories:

*	static assets, that'd be images and graphics, and 
*	dynamic assets, so video and audio. 

1.  For static assets, we can break that category down further based on the purpose of the media element. 
*	Is it being displayed for information? Or 
*	is it an event trigger or navigation link? Or 
*	Is it decoration? 

Defining the purpose of the assets becomes important when choosing how to mark them up and how to leverage the platform most effectively.

2. For dynamic elements, we can mostly assume the purpose of the media is some form of information sharing with the rare exception of a purely visual, auto-play video playing in the background, which is something I strongly advise against for accessibility and performance reasons.
   

If and when an audio or video asset contains any information, we have to think beyond the media asset itself to how to convey that information, even when the media asset is not being played or is not accessible. Meaning we should always provide complete verbatim, plain text transcripts. There are three good reasons for this. Transcripts

*	make the information accessible to anyone able to access text via visual browsers, visual screen readers, or text-to-speech browsers. And that includes people who prefer to read rather than watch or listen to content
*	make the information searchable, copyable, and to a degree, translatable through auto-translation. And 
*	make the information indexable by search engines in a way that video files and audio files never can. 
