We can now build out a more advanced multi-level or dropdown navigation menu using the same button trigger modality. Here's what it looks like in the browser. I can hover over any one of these menu items. If I click on one of the ones that has a down-pointing chevron, it opens a dropdown menu.

. And if you look, I'll say, if I hit the Tab key once, I get to skip navigation. That's because this is a fairly large menu and I might want to give people the option of just not going through the navigation menu. So, Skip navigation, we'll just skip past the navigation and into the main content. If I keep tabing, I get through the Home button, then to the News button, here I can open the News tab through it. When I go to the end of the news list and tab again, the News list automatically collapses,

So this news item is a button, it's not a link. And that's what we saw in the previous example as well. We're using a button to trigger the opening and closing. This here is different from the classic way of building these types of menus. The common approach is to have a top level menu item that is a link and that have that via clickable link leading to a new page and then the sub menu items are related links. However, this approach was created when we only cared about mouse hover states, and it doesn't really work well with touchscreens or keyboard navigation. In a touchscreen scenario, for example, clicking on a link leads to the navigation even if what we wanted to do was open a sub menu. So a solution that has been introduced then is to turn that little chevron on the side here into a separate button. So you have the news link and then you have a button inside that points down to open the menu but this creates a really clunky user interface. So it's actually better to force the mouse user to make an extra click than it is to force everyone else to suffer through things not working properly, which is why this is a button.