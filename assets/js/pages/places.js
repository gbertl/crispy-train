const galleryModal = () => {
  let counter = 0;

  const parent = document.querySelector('.gallery-modal');
  const currentSlide = parent.querySelector('[data-veloute=slideshow-image]');
  const remainingSlides = parent.querySelectorAll('.hidden > img');
  const slideSrcs = [currentSlide.src];
  remainingSlides.forEach((rs) => slideSrcs.push(rs.src));

  const apply = () => {
    // replace current slide
    currentSlide.setAttribute('src', slideSrcs[counter]);

    // update counter
    parent.querySelector('.btn-light__text').innerText = `${counter + 1} / ${
      slideSrcs.length
    }`;

    // right side interactions

    // white cloud left and right
    if (counter === 0) {
      parent.querySelectorAll('.gallery-modal__thumbs-transform > div')[0].classList.remove('gallery-modal__thumbs-left-cloud');
    }

    if (counter < slideSrcs.length - 1 && counter !== 0) {
      parent.querySelectorAll('.gallery-modal__thumbs-transform > div')[0].classList.add('gallery-modal__thumbs-left-cloud');
    }

    if (counter === slideSrcs.length - 1) {
      parent.querySelectorAll('.gallery-modal__thumbs-transform > div')[1].classList.remove('gallery-modal__thumbs-right-cloud');
    } else {
      parent.querySelectorAll('.gallery-modal__thumbs-transform > div')[1].classList.add('gallery-modal__thumbs-right-cloud');
    }

    // update border for currentSlide
    parent.querySelector('.gallery-modal__thumb-btn-active').classList.replace('gallery-modal__thumb-btn-active', 'gallery-modal__thumb-btn');
    parent
      .querySelector(`button[data-photo-index="${counter}"]`)
      .classList.replace('gallery-modal__thumb-btn', 'gallery-modal__thumb-btn-active');

    if (counter === 0 || counter === 1)
      parent.querySelector('.gallery-modal__thumbs-list').style = 'transform: translateX(8px)';
    if (counter === 2)
      parent.querySelector('.gallery-modal__thumbs-list').style = 'transform: translateX(0)';
  };

  parent
    .querySelector('button[aria-label=Next]')
    .addEventListener('click', () => {
      if (counter < slideSrcs.length - 1) {
        counter += 1;
        apply();
      } else {
        counter = 0;
        apply();
      }
    });

  parent
    .querySelector('button[aria-label=Previous]')
    .addEventListener('click', () => {
      if (counter > 0) {
        counter -= 1;
        apply();
      } else {
        counter = slideSrcs.length - 1;
        apply();
      }
    });

  // right side thumb buttons updates slide
  parent.querySelectorAll('.gallery-modal__thumbs-list button[data-photo-index]').forEach((el) => {
    el.addEventListener('click', (e) => {
      counter = parseInt(e.currentTarget.dataset.photoIndex);
      apply();
    });
  });

  // handles closing of gallery modal
  parent.querySelector('.gallery-modal__close').addEventListener('click', () => {
    document.body.classList.remove('hidden-vscroll');

    document.querySelector('.gallery-modal').classList.add('hidden');
  });

  // opens gallery modal by clicking any photos or show all button
  document
    .querySelectorAll('[id*=header-photo-], .place__show-photos-btn > button')
    .forEach((el) => {
      el.addEventListener('click', (e) => {
        document.body.classList.add('hidden-vscroll');

        counter = parseInt(
          e.currentTarget.getAttribute('id')?.replace('header-photo-', '') || 0
        );

        apply();

        document.querySelector('.gallery-modal').classList.remove('hidden');
      });
    });
};

galleryModal();

const mobileCarousel = () => {
  let counter = 0;
  const slideContainer = document.querySelector('.mobile-carousel__slide-wrapper');
  const slides = document.querySelectorAll('.mobile-carousel__slide-wrapper > li');
  let size = slides[0].offsetWidth;
  const dotsContainer = document.querySelector('.mobile-carousel__dots');

  for (let x = 0; x < slides.length; x++) {
    const span = document.createElement('span');
    if (x === 0) {
      span.classList.add('mobile-carousel__dot-active');
    } else {
      span.classList.add('mobile-carousel__dot');
    }

    dotsContainer.appendChild(span);
  }

  const updateDots = () => {
    dotsContainer
      .querySelector('.mobile-carousel__dot-active')
      .classList.replace('mobile-carousel__dot-active', 'mobile-carousel__dot');
    dotsContainer
      .querySelectorAll('span')
      [counter].classList.replace('mobile-carousel__dot', 'mobile-carousel__dot-active');
  };

  const apply = () => {
    slideContainer.scrollTo({
      left: counter * size,
      behavior: 'smooth',
    });
  };

  window.addEventListener('resize', () => size = slides[0].offsetWidth)

  document
    .querySelector('.mobile-carousel__btn[aria-label=Next]')
    .addEventListener('click', () => {
      if (counter < slides.length - 1) {
        counter += 1;
      } else {
        counter = 0;
      }

      apply();
    });

  document
    .querySelector('.mobile-carousel__btn[aria-label=Previous]')
    .addEventListener('click', () => {
      if (counter > 0) {
        counter -= 1;
      } else {
        counter = slides.length - 1;
      }
      apply();
    });

  slideContainer.addEventListener('scroll', (e) => {
    counter = Math.round(e.currentTarget.scrollLeft / size);
    updateDots();
  });
};

mobileCarousel();

// sets currentSlide image responsive in mobile
window.addEventListener('resize', () => {
  const desktopStyle =
    'max-height: 75vh; object-fit: cover; cursor: pointer; z-index: 2; border-radius: 16px; position: absolute; max-width: 85%; margin: 0px auto; inset: 50% 0px 0px; transform: translateY(-50%);';
  const mobileStyle =
    'max-height: 55vh; object-fit: cover; cursor: pointer; z-index: 2; border-radius: 16px; position: absolute; max-width: 85%; margin: 0px auto; inset: 0px;';

  if (document.body.clientWidth < 1128) {
    document.querySelector('[data-veloute="slideshow-image"]').style =
      mobileStyle;
  } else {
    document.querySelector('[data-veloute="slideshow-image"]').style =
      desktopStyle;
  }
});
