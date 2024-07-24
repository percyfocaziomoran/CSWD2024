//function to make text appear in Developers page for under Alex's photo
function appearTextA(){
    var hiddenText = document.getElementById("alexSection");
    hiddenText.innerText = "Japanese food, code and rest. Alex's lifestyle."
}
//function to make text appear in Developers page for under Percy's photo
function appearTextP(){
    var hiddenText = document.getElementById("percySection");
    hiddenText.innerText = "-Initialisation of all webpages on HTML level\n-Some CSS for theme of most pages\n-Parts of JavaScript\n-Structure and content of 2 webpages\n-Navigation creation and CSS related\n-Documentation"
}
//function to make text appear in Developers page for under Manoel's photo
function appearTextM(){
    var hiddenText = document.getElementById("manoelSection");
    hiddenText.innerText = "-Parts of JavaScript\n-Parts of CSS\n-The Pong Game\n-Structure of 2 webpages\n-Header\n-Navigation Bar/Hamburger menu"
}
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.scrollY >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }