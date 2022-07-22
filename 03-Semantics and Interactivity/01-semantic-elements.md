# The role of semantic elements

With HTML5, the markup language got a much needed semantic updates. Before, we pretty much just had a generic div to work with anytime we wanted to wrap and bundle content together, and there was no straightforward way of letting the browser or assistive technologies know what role any of those divs and their content really held.

Now we have highly semantic elements that clearly state their intent and implicit roles, and we can further extend this communication feature using ARIA. Zooming out and looking at a standard web page, we have areas that are distinct from one another and serve distinct semantic purposes. There's a header, an advertising banner, a sidebar with some meta content, a main area containing the main article and links to three related articles, a sidebar with other content, and so on.

Using the semantic elements in HTML we can clearly identify each of these areas, and communicate their purpose without adding any extra code. 

Element          |  Role            |  Landmark
--------------   | ------------     |  ----------
<header>         |  Banner          |  Banner
<div>            |     -            |     -    
<aside>          |  complementary   | complementary
<main>           |  Main            |   Main
<article>        |  Article         |     -
<footer>         |  Contentinfo     | Contentinfo


As a bonus, these roles and landmarks also improve the SEO of your content, since search engines are effectively accessibility users and they map out the content based on these landmarks and roles.
