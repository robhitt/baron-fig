"use strict";

window.addEventListener('load', app);

function app() {

  // MOBILE NAV
  const mobileNav = document.querySelector('.header__left-content');
  mobileNav.addEventListener('click', toggleMobileNav) ;
  let menuClosed = true;

  function toggleMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const closeButton = document.querySelector('.close-button');
    const menuItems = document.querySelector('.header__right-content');
    
    if (menuClosed) {
      hamburger.classList.add('hidden-nav-icon');
      closeButton.classList.remove('hidden-nav-icon');
      menuItems.classList.remove('hidden-nav-icon');
      menuClosed = !menuClosed;
    } else {
      hamburger.classList.remove('hidden-nav-icon');
      closeButton.classList.add('hidden-nav-icon');
      menuItems.classList.add('hidden-nav-icon');
      menuClosed = !menuClosed;
    }
  }

  // CAROUSEL LOGIC
  let sliderImages = document.querySelectorAll('.main__carousel-slide'),
      arrowPrev = document.querySelector('.main__carousel--prev'),
      arrowNext = document.querySelector('.main__carousel--next'),
      currentSlide = 0;

  function resetSlides() {
    sliderImages.forEach( (image) => {
      image.style.display = 'none';
    });
  }

  // Initialize carousel
  function startSlide() {
    console.log(sliderImages.length);
    
    resetSlides();
    sliderImages[0].style.display = 'block';
  }

  // Show previous
  arrowPrev.addEventListener('click', slidePrev);
  function slidePrev() {
    checkPrevButton();
    resetSlides();
    sliderImages[currentSlide - 1].style.display = 'block';
    currentSlide--;
  }

  function checkPrevButton() {
    if (currentSlide === 0) {
      currentSlide = sliderImages.length; 
    }
  }

  // Show Next
  arrowNext.addEventListener('click', slideNext);
  function slideNext() {
    checkNextButton();
    resetSlides();
    sliderImages[currentSlide + 1].style.display = 'block';
    currentSlide++;
  }

  function checkNextButton() {
    if (currentSlide === sliderImages.length - 1) {
      currentSlide = -1; 
    }
  }

  // ADD PREVIOUS AND NEXT CLICK EVENT LISTENERS
  window.addEventListener('keydown', changeSlideByKeyPress)
  
  function changeSlideByKeyPress(event) {
    if (event.which === 37) {
      slidePrev();
    }

    if (event.which === 39) {
      slideNext();
    }    
  }

  startSlide();
}



// const url = "ADD_URL_ENDPOINT_HERE";
  // fetch(url, {
  //     method: "GET"
  //   })
  //   .then(response => response.json())
  //   .then(response => renderPage(response))
  //   .catch(err => console.log(err));

// function renderPage(response) {
//   console.log("Hello, World!");
// }