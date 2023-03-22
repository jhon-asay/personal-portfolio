'use strict';

////////////////////////////////
///        NAVIGATION        ///
////////////////////////////////

const sideNav = document.querySelector('.side-nav');

const burgerBtn = document.querySelector('.sidebar__burger-btn');
const sideNavList = document.querySelector('.side-nav__list');

const toggleButtonAndNav = () => {
  burgerBtn.classList.toggle('open');
  sideNav.classList.toggle('open');
};

const toggleExpanded = () => {
  const isExpanded = sideNavList.getAttribute('aria-expanded') === 'true';
  sideNav.setAttribute('aria-expanded', !isExpanded);
};

const openNav = () => {
  burgerBtn.addEventListener('click', () => {
    toggleButtonAndNav();
    toggleExpanded();
  });
  sideNavList.addEventListener('click', toggleButtonAndNav);
};

openNav();

const mobileScroll = () => {
  const sidebarHeight = document.querySelector('.sidebar').offsetHeight;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const scrollPosition = target.offsetTop - sidebarHeight;
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth',
        });
      }
    });
  });
};

const runOnMobile = (scrollFunction) => {
  if (window.matchMedia('(max-width: 500px)').matches) {
    scrollFunction();
  } else {
    return;
  }
};

runOnMobile(mobileScroll);

// window.addEventListener('resize', () => {
//   if (window.matchMedia('(max-width: 500px)').matches) {
//     runOnMobile(mobileScroll);
//   } else {
//     return;
//   }
// });

////////////////////////////////
///          SLIDER          ///
////////////////////////////////

const slideContainer = document.querySelectorAll('.slider');

for (let i = 0; i < slideContainer.length; i++) {
  const slider = function () {
    const slides = slideContainer[i].querySelectorAll('.slider__slide');
    const btnLeft = slideContainer[i].querySelector('.slider__btn--left');
    const btnRight = slideContainer[i].querySelector('.slider__btn--right');
    const dotContainer = slideContainer[i].querySelector('.slider__dots');

    let currentSlide = 0;
    const maxSlide = slides.length;

    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="slider__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = function (slide) {
      slideContainer[i]
        .querySelectorAll('.slider__dot')
        .forEach((dot) => dot.classList.remove('slider__dot--active'));

      slideContainer[i]
        .querySelector(`.slider__dot[data-slide="${slide}"]`)
        .classList.add('slider__dot--active');
    };

    const goToSlide = function (value) {
      slides.forEach(
        (slide, index) =>
          (slide.style.transform = `translateX(${100 * (index - value)}%)`)
      );
    };
    goToSlide(0);

    const nextSlide = function () {
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    const previousSlide = function () {
      if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
      } else {
        currentSlide--;
      }

      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
    };

    init();

    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', previousSlide);

    dotContainer.addEventListener('click', function (event) {
      if (event.target.classList.contains('slider__dot')) {
        const { slide } = event.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };

  slider();
}
