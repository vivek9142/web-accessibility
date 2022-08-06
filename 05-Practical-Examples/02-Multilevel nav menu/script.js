// Find all sub-menus.
const subMenus = document.querySelectorAll(".main-nav ul ul");
// Find all sub-menu trigger buttons. */
const menuTriggers = document.querySelectorAll(".menu-trigger");


/*
 The overall functionality is the same as it was in the previous example. We're using this 
 hide class to hide content, but here since we may have multiple different drop-down menus, 
 I'm using a, forEach loop to go through each of the sub menu items and then applying the 
 hide class. It also means if JavaScript is not working, when the menu opens, it'll open 
 with all the drop-downs visible. Now, of course I could build extra CSS for that eventuality. 
 
 So if there is no JavaScript, you don't get dropped on menus that cover content, but instead 
 the menu would just be reconfigured to fit that scenario. 
*/
// Hide all sub-menus.
subMenus.forEach((subMenu) => {
  subMenu.classList.add("hide");
});

/**
 * Toggle sub-menu open/closed.
 * @param {DOM node} parent
 * @param {boolean} status
 */
const toggleMenu = (parent, status) => {
  const trigger = parent.querySelector("button");
  const subMenu = parent.querySelector("ul");
  if (status == "false") {
    parent.classList.add("open");
    subMenu.classList.remove("hide");
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-label", "Close news menu.");
  } else {
    parent.classList.remove("open");
    subMenu.classList.add("hide");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Open news menu.");
  }
};

/*
Once we've hidden the menu item, I then need to find all of the menu triggers so that I can 
add functionality to each of the menu triggers in turn. Then for each of the trigger buttons, 
we add the down arrow that's that little chevron on the right hand side we set the area 
attributes and we add an event listener to listen for the click or tab to events. That 
toggles the toggle menu functionality and here we pass in both the parent. So that would be 
the current sub menu we are in and the status of the menu up here in toggle menu we're doing 
the same thing we did in the previous movie, we grab, we figure out where we are. So what 
unordered list we're currently sitting in, then we check the status of the current list is it 
open or closed and then we set the class and the attributes appropriately for the status 
we're currently in. 
*/

// For each trigger button:
// - add a down-arrow
// - set aria attributes
// - add event listener
menuTriggers.forEach((trigger) => {
  trigger.classList.add("sub");
  trigger.setAttribute("aria-expanded", "false");
  trigger.setAttribute("aria-label", "Open news menu.");
  trigger.addEventListener("click", function () {
    const parent = trigger.parentElement;
    const status = trigger.getAttribute("aria-expanded");
    toggleMenu(parent, status);
  });
});


/*
 At the very bottom of the script, you'll again, find these two functions that just listen 
 to see if the focus slips out of the unordered list meaning we're tabbing passed on ordered 
 list and then that case, the whole menu closes or if we click anywhere outside the 
 navigation menu, also, if that happens, then the navigation closes.
*/
// Close sub-menus when user tabs outside menu.
document.addEventListener("focusin", (e) => {
  let currentSubMenu = document.querySelector(".open");
  if (currentSubMenu && e.target.closest(".has-sub-menu") !== currentSubMenu) {
    toggleMenu(currentSubMenu, true);
  }
});

// Close sub-menus when user clicks outside menu.
document.addEventListener("click", (e) => {
  let currentSubMenu = document.querySelector(".open");
  if (currentSubMenu && e.target.closest(".has-sub-menu") !== currentSubMenu) {
    toggleMenu(currentSubMenu, true);
  }
});