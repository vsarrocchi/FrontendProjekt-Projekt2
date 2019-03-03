
// automatisk slideshow - index sida

let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2500);
}
showSlides();

// slideshow scrip - pagaende sida

// overlay - pagaende sida
