/*function getCarousel() {
  document.getElementById("myCarousel").style.opacity = ".98";
  document.getElementById("nav-bar").style.opacity = 1;
  document.getElementById("login-button").style.opacity = "0";
  document.body.style.backgroundImage = "none";
  document.getElementById("carousel-container").style.opacity = 1;
  document.getElementById("testimonials").style.display = "block";
  document.getElementById("scroll").style.display = "block";
  document.getElementById("scroll-button").style.display = "block";
}*/

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
