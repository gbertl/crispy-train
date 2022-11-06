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
