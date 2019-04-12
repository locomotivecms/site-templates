/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.3.1): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
(function ($) {
  if (typeof $ === 'undefined') {
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
  }

  var version = $.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})($);
//# sourceMappingURL=index.js.map


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
var hamburger = document.querySelector(".hamburger");

hamburger.addEventListener('click', () => hamburger.classList.contains('is-active') ? closeNav() : openNav());

closeNav();


/* --------------- VALIDATION DU FORMULAIRE --------------- */


// $(document).ready(function(){
//   $("#submit-button").click(function(){

//     var mail = document.getElementById("mail-newsletter").value;
//     alert(mail);

//       $.post("index.liquid",
//       {
//         email: "ccccccccccccccccccc"
//       },
//     function(data,status){
//       alert("Data: " + email);
//     });
//   });
// });