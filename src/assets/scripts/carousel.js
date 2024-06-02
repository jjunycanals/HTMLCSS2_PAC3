document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');

  function showSlide(slideIndex) {
      if (slideIndex >= slides.length) {
          currentSlide = 0;
      } else if (slideIndex < 0) {
          currentSlide = slides.length - 1;
      } else {
          currentSlide = slideIndex;
      }
      slides.forEach((slide, index) => {
          slide.style.transform = `translateX(-${currentSlide * 100}%)`;
      });
  }

  function nextSlide() {
      showSlide(currentSlide + 1);
  }

  function prevSlide() {
      showSlide(currentSlide - 1);
  }

  // Inicialització del carousel
  showSlide(currentSlide);

  // Afegir listeners als botons next i previous
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  prevButton.addEventListener('click', prevSlide);
  nextButton.addEventListener('click', nextSlide);
});
