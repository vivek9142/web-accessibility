const nav = document.querySelector(".main-nav");
const trigger = document.querySelector(".menu-trigger");
const menu = document.querySelector(".main-nav ul");

/*
I've created a class called hide which sets the display property of whatever element is 
applied to none. That hides the menu from the browser and the screen readers. In JavaScript, 
I first find the navigation menu and then I apply the hide class. That means when you open 
the page, the menu is actually open and then one JavaScript kicks in, the menu closes. That 
way, it'll always be available even if JavaScript is not working. 
*/
// Hide menu on open.
menu.classList.add("hide");

// Toggle menu open/closed.
const toggleMenu = (status) => {
  if (status == "false") {
    menu.classList.remove("hide");
    trigger.setAttribute("aria-expanded", "true");
    trigger.setAttribute("aria-label", "Close news menu.");
  } else {
    menu.classList.add("hide");
    trigger.setAttribute("aria-expanded", "false");
    trigger.setAttribute("aria-label", "Open news menu.");
  }
};

/*
At the same time down here, if we set the initial state for the button. So you'll remember 
in the button, the text says Main menu. Now we can use JavaScript to extend that by adding 
an aria label and the aria labels says, Open news menu. That way, if you come in with a 
screen reader it'll actually read out, "Open news menu" rather than just say, "menu button". 

We also add the aria expanded false attribute to it so that it'll notify a screen reader. 
The button is toggling something and that something is currently closed. 

Then we add an event listener to the button and listen for the click. When the click appears, 
we first get the aria attributes, so the aria-expanded attribute, we are just we'll be either
true or false and this will tell us whether the button is currently open or closed. 
*/

// Set initial state for the button.
trigger.setAttribute("aria-expanded", "false");
trigger.setAttribute("aria-label", "Open news menu.");

// Listen for button click
trigger.addEventListener("click", function () {
  const status = trigger.getAttribute("aria-expanded");
  toggleMenu(status);
});

// Close menu when user tabs outside the menu.
document.addEventListener("focusin", (e) => {
  if (e.target.closest("nav") !== nav) {
    toggleMenu(true);
  }
});

// Close menu when user clicks outside the menu.
document.addEventListener("click", (e) => {
  if (e.target.closest("nav") !== nav) {
    toggleMenu(true);
  }
});