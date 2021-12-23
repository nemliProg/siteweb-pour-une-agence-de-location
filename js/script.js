$(function () {
  let hamburger = $("#hamburger");
  let nav = $("#header-nav");
  let navLinks = $("header nav ul li a");
  let logo = $("#logo-holder a img");

  navLinks.click(function () {
    if (window.innerWidth <= 700) {
      nav.slideToggle("slow");
      
    }
  });
  hamburger.click(function () {
    nav.slideToggle("slow");
  });
  // initial logo selection
  if (window.innerWidth >= 700) {
    nav.css("display", "flex");
    logo.attr("src","/img/logos/RMN logo png.png");
  } else {
    nav.css("display", "none");
    logo.attr("src","img/logos/RMN logo png mobile.png");
  }
  // resize tet
  $(window).resize(function () {
    if (window.innerWidth >= 700) {
      nav.css("display", "flex");
      logo.attr("src","/img/logos/RMN logo png.png");
      

    } else {
      nav.css("display", "none");
      logo.attr("src","img/logos/RMN logo png mobile.png");
      $("#menu").removeClass( "opened" );
    }
  });
});