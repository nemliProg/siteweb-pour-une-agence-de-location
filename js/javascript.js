// scroll animation link to first Section
document.getElementById("scroll").addEventListener("click", () => {
  window.location = "http://127.0.0.1:5500/index.html#first";
});
// onscroll navigation bar shrink
let header = document.getElementsByTagName("header");
let logo = document.getElementById("logo-holder");
window.onscroll = function () {
  if (window.innerWidth >= 700) {
    scrollFunction();
  }
  
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    header[0].style.height = "48px";
    header[0].style.borderBottom = "solid 2px black";
    logo.style.display = "none";
  } else {
    header[0].style.height = "max-content";
    logo.style.display = "block";
    header[0].style.borderBottom = "none";
  }
}

