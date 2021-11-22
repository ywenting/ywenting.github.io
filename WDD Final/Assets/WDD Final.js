function toggleSpring() {
    let body = document.querySelector('body');
    body.classList.toggle('spring-mode');
}
let springbutton = document.querySelector('#SpringButton');
springbutton.onclick = toggleSpring;

function toggleSummer() {
    let body = document.querySelector('body');
    body.classList.toggle('summer-mode');
}
let summerbutton = document.querySelector('#SummerButton');
summerbutton.onclick = toggleSummer;

function toggleAutumn() {
    let body = document.querySelector('body');
    body.classList.toggle('autumn-mode');
}
let autumnbutton = document.querySelector('#AutumnButton');
autumnbutton.onclick = toggleAutumn;

function toggleWinter() {
    let body = document.querySelector('body');
    body.classList.toggle('winter-mode');
}
let winterbutton = document.querySelector('#WinterButton');
winterbutton.onclick = toggleWinter;



var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}