const galleryModal = () => {
  let counter = 0;

  const parent = document.querySelector('._1ugan3i');
  const currentSlide = parent.querySelector('[data-veloute=slideshow-image]');
  const remainingSlides = parent.querySelectorAll('._1u9fru1 > img');
  const slideSrcs = [currentSlide.src];
  remainingSlides.forEach((rs) => slideSrcs.push(rs.src));

  const apply = () => {
    // replace current slide
    currentSlide.setAttribute('src', slideSrcs[counter]);

    // update counter
    parent.querySelector('._1p3joamp').innerText = `${counter + 1} / ${
      slideSrcs.length
    }`;

    // right side interactions

    // white cloud left and right
    if (counter === 0) {
      parent.querySelectorAll('._cw8pnk > div')[0].classList.remove('_mezawn');
    }

    if (counter < slideSrcs.length - 1 && counter !== 0) {
      parent.querySelectorAll('._cw8pnk > div')[0].classList.add('_mezawn');
    }

    if (counter === slideSrcs.length - 1) {
      parent.querySelectorAll('._cw8pnk > div')[1].classList.remove('_1iwi6a4');
    } else {
      parent.querySelectorAll('._cw8pnk > div')[1].classList.add('_1iwi6a4');
    }

    // update border for currentSlide
    parent.querySelector('._1umg7png').classList.replace('_1umg7png', '_hwcst');
    parent
      .querySelector(`button[data-photo-index="${counter}"]`)
      .classList.replace('_hwcst', '_1umg7png');

    if (counter === 0 || counter === 1)
      parent.querySelector('._conlnu').style = 'transform: translateX(8px)';
    if (counter === 2)
      parent.querySelector('._conlnu').style = 'transform: translateX(0)';
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
  parent.querySelectorAll('._conlnu button[data-photo-index]').forEach((el) => {
    el.addEventListener('click', (e) => {
      counter = parseInt(e.currentTarget.dataset.photoIndex);
      apply();
    });
  });

  // handles closing of gallery modal
  parent.querySelector('._1rp5252').addEventListener('click', () => {
    document.body.classList.remove('hidden-vscroll');

    document.querySelector('._1ugan3i').classList.add('hidden');
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

        document.querySelector('._1ugan3i').classList.remove('hidden');
      });
    });
};

galleryModal();

const mobileCarousel = () => {
  let counter = 0;
  const slideContainer = document.querySelector('._rxz20bq');
  const slides = document.querySelectorAll('._rxz20bq > li');
  let size = slides[0].offsetWidth;
  const dotsContainer = document.querySelector('._1b2klj3');

  for (let x = 0; x < slides.length; x++) {
    const span = document.createElement('span');
    if (x === 0) {
      span.classList.add('_figllth');
    } else {
      span.classList.add('_1g2uchb');
    }

    dotsContainer.appendChild(span);
  }

  const updateDots = () => {
    dotsContainer
      .querySelector('._figllth')
      .classList.replace('_figllth', '_1g2uchb');
    dotsContainer
      .querySelectorAll('span')
      [counter].classList.replace('_1g2uchb', '_figllth');
  };

  const apply = () => {
    slideContainer.scrollTo({
      left: counter * size,
      behavior: 'smooth',
    });
  };

  window.addEventListener('resize', () => size = slides[0].offsetWidth)

  document
    .querySelector('._1ue05kx[aria-label=Next]')
    .addEventListener('click', () => {
      if (counter < slides.length - 1) {
        counter += 1;
      } else {
        counter = 0;
      }

      apply();
    });

  document
    .querySelector('._1ue05kx[aria-label=Previous]')
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
