# Jhon Asay's Front-end Developer Portfolio

This is my professional portfolio website created for recruiters and hiring managers. The website is divided into various sections, such as 'header', 'about me', 'skills', 'projects', 'contact', and 'footer'. The project has been developed using HTML, Sass, and JavaScript, ensuring a mobile-responsive, accessible, and user-friendly experience.

## Features

- Mobile-responsive design
- Good color contrast for UX/UI
- ARIA attributes for enhanced accessibility
- Project slider component
- Animated navigation bar

## Prerequisites

To work with the Sass files in this project, you will need to have the following installed on your system:

- [Node.js](https://nodejs.org/)
- [Sass](https://sass-lang.com/install)

## Installation

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Install the required dependencies:

```
npm install -g sass
```

4. To compile the Sass files, run the following command from the project root:

```
sass main.scss main.css
```

5. To automatically compile the Sass files, install the "Live Sass Compiler" extension in Visual Studio Code. Once installed, click on the "Watch Sass" button in the bottom status bar to start compiling your Sass files.

## Code snippets

### Project Slider Component

This JavaScript code snippet creates a reusable slider component that can be used to showcase multiple project images or content in a carousel format. The slider function is designed to work with any number of project cards that use the "slider" class. By iterating through all elements with the "slider" class using a for loop, the slider function can be easily applied to multiple project cards, allowing you to create as many sliders as needed on a single page.

```javascript
const slideContainer = document.querySelectorAll('.slider');

for (let i = 0; i < slideContainer.length; i++) {
  const slider = () => {
    const slides = slideContainer[i].querySelectorAll('.slider__slide');
    const btnLeft = slideContainer[i].querySelector('.slider__btn--left');
    const btnRight = slideContainer[i].querySelector('.slider__btn--right');
    const dotContainer = slideContainer[i].querySelector('.slider__dots');

    let currentSlide = 0;
    const maxSlide = slides.length;

    const createDots = () => {
      slides.forEach((_, i) => {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="slider__dot" data-slide="${i}"></button>`
        );
      });
    };

    const activateDot = (slide) => {
      slideContainer[i]
        .querySelectorAll('.slider__dot')
        .forEach((dot) => dot.classList.remove('slider__dot--active'));

      slideContainer[i]
        .querySelector(`.slider__dot[data-slide="${slide}"]`)
        .classList.add('slider__dot--active');
    };

    const goToSlide = (value) => {
      slides.forEach(
        (slide, index) =>
          (slide.style.transform = `translateX(${100 * (index - value)}%)`)
      );
    };
    goToSlide(0);

    const nextSlide = () => {
      if (currentSlide === maxSlide - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }

      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    const previousSlide = () => {
      if (currentSlide === 0) {
        currentSlide = maxSlide - 1;
      } else {
        currentSlide--;
      }

      goToSlide(currentSlide);
      activateDot(currentSlide);
    };

    const init = () => {
      goToSlide(0);
      createDots();

      activateDot(0);
    };

    init();

    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', previousSlide);

    dotContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('slider__dot')) {
        const { slide } = event.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };

  slider();
}
```

### Animated Navigation Bar

This SCSS code snippet styles a responsive side navigation bar with smooth hover and active state animations.

```scss
.side-nav {
  list-style: none;

  &__item {
    position: relative;
    width: 100%;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }

  &__item::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 10px;
    background-color: var(--color-primary);
    transform: scaleY(0);
    transition: transform 0.2s, width 0.2s cubic-bezier(1, 0, 0, 1) 0.2s,
      background-color 0.1s;
  }

  &__item:hover::before,
  &__item--active::before {
    transform: scaleY(1);
    width: 100%;
  }

  &__item:active::before {
    background-color: var(--color-primary-light);
  }

  &__link:link,
  &__link:visited {
    display: flex;
    align-items: center;
    color: var(--color-grey-light-1);
    font-size: 1.6rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 3rem;
    position: relative;
    z-index: 1;
  }
}
```

## Accessibility

The website uses ARIA attributes to ensure good accessibility and user experience. It has been developed with a focus on mobile responsiveness, good color contrast, and an overall user-friendly design.

## Contributions

This project has benefited from the valuable feedback provided by other developers in my network. Their insights have taught me a lot and helped improve the website's SEO, accessibility, and performance.

## Author and License

The website has been developed by Jhon Asay. There is no specific licensing for this project.
