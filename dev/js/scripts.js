// @codekit-prepend "fancyBox.js";
// @codekit-prepend "tinySlider.js";

// @codekit-prepend "main-nav/burger-animation.js";
// @codekit-prepend "main-nav/burger-mouse-events.js";
// @codekit-prepend "main-nav/nav-global.js";
// @codekit-prepend "main-nav/burger-click.js";
// @codekit-prepend "main-nav/nav-scroll.js";
// @codekit-prepend "main-nav/main-nav-click.js";
// @codekit-prepend "scroll-trigger/scroll-trigger-global.js";
// @codekit-prepend "scroll-trigger/logos-scroll.js";
// @codekit-prepend "scroll-trigger/alarm-clock-scroll.js";
// @codekit-prepend "scroll-trigger/weather-icons-scroll.js";
// @codekit-prepend "scroll-trigger/nav-scroll.js";
// @codekit-prepend "scroll-trigger/pin-hero-scroll.js";

$( document ).ready(function() {

   $("#show-form-btn").on("click", function(){
      //console.log("button clicked");

      // hide contact-button-section
      $("#contact-button-section").hide();

      // show form container
      $("#form-container").show();

   });

});

