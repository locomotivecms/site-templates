// === Wagon main javascript file ===

// Tell Webpack to load the style
import '../stylesheets/app.scss';

require('bootstrap');

// Import the classes required to handle sections
import SectionsManager from './sections/_manager';
import * as Sections from './sections';

document.addEventListener('DOMContentLoaded', event => {

  // Load all the sections
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE

  sectionsManager.start();

});


/*-------------- ANIMATION MENU BURGER ------------- */

function openNav() {
  hamburger.classList.add("is-active");
  document.getElementById("popUpNav").style.display = "block";
}

function closeNav() {
  hamburger.classList.remove("is-active");
  //document.getElementById("popUpNav").style.display = "none";
}

// Hamburger Menu Spin
// var hamburger = document.querySelector(".hamburger");
var hamburger = document.getElementById("button-menu");

hamburger.addEventListener('click', () => hamburger.classList.contains('is-active') ? closeNav() : openNav());

closeNav();