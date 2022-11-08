const carousel = () => {
  const nextBtn = document.querySelector('._1ue05kx[aria-label=Next]');
  const prevBtn = document.querySelector('._1ue05kx[aria-label=Previous]');
  const dotsWrapper = document.querySelector('.pagination-bullets__list');
  let counter = 0;
  const slideWrapper = document.querySelector('._rxz20bq');
  const slides = slideWrapper.querySelectorAll('li');
  const width = slides[0].offsetWidth;
  const overlays = document.querySelectorAll(
    '._rxz20bq li:first-child > div > div'
  );

  // creates bullets
  for (let x = 0; x < slides.length; x++) {
    const span = document.createElement('span');
    span.classList.add('_13280q5');
    dotsWrapper.appendChild(span);
  }

  const dots = dotsWrapper.querySelectorAll('._13280q5');

  const updateDots = () => {
    // sets active to inactive
    dotsWrapper
      .querySelector('._ub4kx1h')
      ?.classList.replace('_ub4kx1h', '_13280q5');
    // sets current dot to active
    dots[counter].classList.replace('_13280q5', '_ub4kx1h');
  };

  const apply = () => {
    slideWrapper.scrollTo({
      left: counter * width,
      behavior: 'smooth',
    });

    updateDots();
  };

  let isAnimated = false;

  nextBtn.addEventListener('click', () => {
    if (isAnimated) {
      if (counter < slides.length - 1) {
        counter += 1;

        apply();
      }
    } else {
      // overlay animations on first slide
      overlays[0].style.transform = 'scale(1)';
      overlays[1].style.backgroundColor = 'rgba(0, 0, 0, 0)';
      overlays[1].style.pointerEvents = 'none';
      overlays[2].style.transform = 'translate3d(-100%, 0px, 0px)';

      // sets first bullet (2 lines icon) inactive
      dotsWrapper
        .querySelector('._8ljj2tl')
        .classList.replace('_8ljj2tl', '_17lgdyh8');
      dotsWrapper
        .querySelector('._13fmufxz')
        .classList.replace('_13fmufxz', '_1x19pr5m');

      dots[0].classList.replace('_13280q5', '_ub4kx1h');

      // shows previous button
      prevBtn.closest('._1lyyzem').style.opacity = '1';

      isAnimated = true;
    }
  });

  prevBtn.addEventListener('click', () => {
    if (counter > 0) {
      counter -= 1;

      apply();

      // shows next button
      nextBtn.closest('._1lyyzem').style.opacity = '1';
    } else {
      // overlay animations on first slide
      overlays[0].style.transform = 'scale(1.1)';
      overlays[1].style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
      overlays[1].style.pointerEvents = 'auto';
      overlays[2].style.transform = 'translate3d(0px, 0px, 0px)';

      // sets first bullet (2 lines icon) active
      dotsWrapper
        .querySelector('._17lgdyh8')
        .classList.replace('_17lgdyh8', '_8ljj2tl');
      dotsWrapper
        .querySelector('._1x19pr5m')
        .classList.replace('_1x19pr5m', '_13fmufxz');

      dots[0].classList.replace('_ub4kx1h', '_13280q5');

      // hides previous button
      prevBtn.closest('._1lyyzem').style.opacity = '0';

      isAnimated = false;
    }
  });

  slideWrapper.addEventListener('scroll', (e) => {
    counter = Math.round(e.currentTarget.scrollLeft / width);
    updateDots();

    // shows and hides next button
    if (counter < slides.length - 1) {
      nextBtn.closest('._1lyyzem').style.opacity = '1';
    } else {
      nextBtn.closest('._1lyyzem').style.opacity = '0';
    }
  });
};

carousel();

// adds gray bg and shows 3 dots button in message host's div
document.querySelectorAll('._1f6woba').forEach((el) => {
  el.addEventListener('mouseenter', (e) => {
    e.currentTarget.classList.replace('_1f6woba', '_pcw78nw');
    e.currentTarget
      .closest('._1w193fh')
      .querySelector('._hp87iag')
      .classList.replace('_hp87iag', '_12xty9qt');
  });

  el.addEventListener('mouseleave', (e) => {
    e.currentTarget.classList.replace('_pcw78nw', '_1f6woba');
    e.currentTarget
      .closest('._1w193fh')
      .querySelector('._12xty9qt')
      .classList.replace('_12xty9qt', '_hp87iag');
  });
});
