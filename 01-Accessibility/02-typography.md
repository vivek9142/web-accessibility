# Designing accessible typography

Most information on the web is text-based. And creating accessible typography's therefore essential to ensure overall accessibility.

Designing accessible typography can be successfully done by following a few basic principles. 

*	Larger font sizes within reason are preferred. The default font size of a paragraph on  the web is 12 pixels, which is very small. A common upgraded standard is 16, which in my view is still too small. I recommend either 18 pixels or 20 pixels as the default font size. It's also falls in line with current design trends. When picking a font size, look at what's comfortable to read on different screens and natural environments. Open the page on your computer screen at a regular distance and on your phone screen at a regular distance, and so on. In many cases, the comfortable font size on your phone screen is slightly smaller than that on your computer screen, but it all depends. So you need to actually test it to see what's comfortable.

*	avoid complex fonts. Standard fonts designed for screens are designed for readability. When you start wading into the waters of custom non-standard fonts, readability tends to go way down. Look for clean and minimalist Serif & Sans Design with clear differences between capitalized and lowercase letters. For readability, it's also a good idea to avoid monospace fonts unless you are sharing code, because code should always be displayed with monospace fonts.

*	Avoid fancy fonts. By this, I mean, fonts that use non-standard glyph shapes in an effort to look different. A good example of this are the popular coding fonts that show different R and S symbols depending on use. These are much harder to read for people like me who have severe dyslexia because the Rs and Ss are very difficult to tell apart.

*	keep line lengths around 70 characters at most. This is easily done on mobile devices since the screen isn't big enough for 70 characters, but on large computer screens, it becomes really important. Longer lines are harder to read, and 70 to 80 characters is a commonly agreed upon comfortable line length. We now have a CSS unit that makes setting the line length very simple. Set the max width of a container to 70CH and you get a container with a width of exactly 70 characters. So to sum up, large and comfortable fonts with clean and simple type faces.
