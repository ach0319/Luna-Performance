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

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("pic-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
