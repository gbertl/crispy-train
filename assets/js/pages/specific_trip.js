const carousel = () => {
  const nextBtn = document.querySelector('._1ue05kx[aria-label=Next]');
  const prevBtn = document.querySelector('._1ue05kx[aria-label=Previous]');
  const dotsWrapper = document.querySelector('.pagination-bullets__list');

  nextBtn.addEventListener('click', () => {
    // overlay animations on first slide
    const overlays = document.querySelectorAll(
      '._rxz20bq li:first-child > div > div'
    );

    overlays[0].style.transform = 'scale(1)';
    overlays[1].style.backgroundColor = 'rgba(0, 0, 0, 0)';
    overlays[1].style.pointerEvents = 'none';
    overlays[2].style.transform = 'translate3d(-100%, 0px, 0px)';

    prevBtn.closest('._1lyyzem').style.opacity = '1';

    // sets first bullet (2 lines icon) inactive
    dotsWrapper
      .querySelector('._8ljj2tl')
      .classList.replace('_8ljj2tl', '_17lgdyh8');
    dotsWrapper
      .querySelector('._13fmufxz')
      .classList.replace('_13fmufxz', '_1x19pr5m');
  });
};

carousel();
