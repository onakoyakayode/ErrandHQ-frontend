const toggleBtn = document.querySelector('.toggle-btn')
const navBar = document.querySelector('ul.nav-links')


toggleBtn.addEventListener('click', (e) => {
  if (navBar.style.left === "-120%") {
    navBar.style.left = "0%"
  } else {
    navBar.style.left = "-120%"
  }
})




var currentSlide = 0;
var slides = document.querySelectorAll("#slides .slide");
var controls = document.querySelectorAll(".controls");
var next = document.getElementById("next");
var previous = document.getElementById("previous");

for (var i = 0; i < controls.length; i++) {
    controls[i].style.display = "inline-block";
}

function goToSlide(n) {
    slides[currentSlide].className = "slide";
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = "slide showing";
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

next.onclick = function() {
    nextSlide();
};
previous.onclick = function() {
    previousSlide();
};