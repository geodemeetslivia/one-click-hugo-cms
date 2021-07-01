// JS Goes here - ES6 supported

import "./css/main.scss";

// Say hello
console.log("🦊 Hello! Edit me in src/index.js");
// Get all "navbar-burger" elements
let $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {

  // Add a click event on each of them
  $navbarBurgers.forEach(function ($el) {
    $el.addEventListener('click', function () {

      // Get the target from the "data-target" attribute
      let target = $el.dataset.target;
      let $target = document.getElementById(target);

      // Toggle the class on both the "navbar-burger" and the "navbar-menu"
      $el.classList.toggle('is-active');
      let $icon = document.querySelectorAll('.navbar-burger i');
      $icon[0].classList.toggle('fa-times');
      $target.classList.toggle('is-active');

    });
  });
}
let $tracking_links = Array.prototype.slice.call(document.querySelectorAll('.js-track-conversion'), 0);
if ($tracking_links.length > 0) {
  $tracking_links.forEach(function ($el) {
    $el.addEventListener('click', function () {

      gtag_report_conversion();
    });
  });

}


window.addEventListener("scroll", function(e) {
  const lastKnownScrollPosition = window.scrollY
  const cardsContent = document.querySelector("#cards")
  if (cardsContent) {
    const $sticky = Array.prototype.slice.call(document.querySelectorAll(".sticky"), 0)

    if (lastKnownScrollPosition > cardsContent.offsetTop - cardsContent.offsetHeight -100) {
      if ($sticky.length > 0) {
        $sticky[0].classList.add("is-hidden");
      }
    }
    else {
      if ($sticky.length > 0) {
        $sticky[0].classList.remove("is-hidden");
      }
    }
  }
});


let $cardHeaderIcons = Array.prototype.slice.call(document.querySelectorAll('.card-header'), 0);
if ($cardHeaderIcons.length > 0) {

  // Add a click event on each of them
  $cardHeaderIcons.forEach(function ($el) {
    $el.addEventListener('click', function () {

      // Get the target from the "data-target" attribute
      let target = $el.dataset.target;
      let $target = document.getElementById(target);
      let $icon = $el.querySelector('i');
      $icon.classList.toggle('fa-times');
      $el.querySelector('.card-header-title').classList.toggle('has-text-weight-bold');

      // Toggle visibility
      $target.classList.toggle('is-hidden');
    });
  });
}
bodymovin.loadAnimation({
  container: document.getElementById('bedrift_animation-0'), // Required
  path: "img/animations/FraktBestiling_Box_Bus.json", // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  name: "Nimber bedrift", // Name for future reference. Optional.
  rendererSettings: {
    progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.

  }
});
bodymovin.loadAnimation({
  container: document.getElementById('bedrift_animation-1'), // Required
  path: "img/animations/FraktBestiling_Driver_8s.json", // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  rendererSettings: {
    progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.

  }
});
bodymovin.loadAnimation({
  container: document.getElementById('bedrift_animation-2'), // Required
  path: "img/animations/FraktBestiling_Laptop_No_BG.json", // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
  rendererSettings: {
    progressiveLoad: true, // Boolean, only svg renderer, loads dom elements when needed. Might speed up initialization for large number of elements.

  }
});



