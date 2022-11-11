const container = document.querySelector('.new_scrollable');

const prevButton = document.querySelector(
  'button[aria-label="Previous New this week"]'
);
const nextButton = document.querySelector(
  'button[aria-label="Next New this week"]'
);

container.addEventListener('scroll', (e) => {
  const currentScrollLeft = e.target.scrollLeft;
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  if (currentScrollLeft !== 0 && currentScrollLeft !== maxScrollLeft) {
    prevButton.removeAttribute('disabled');
    nextButton.removeAttribute('disabled');
  }

  if (currentScrollLeft === 0) {
    prevButton.setAttribute('disabled', true);
  }

  if (currentScrollLeft + 10 > maxScrollLeft) {
    nextButton.setAttribute('disabled', true);
  }

  // console.log(currentScrollLeft, maxScrollLeft);
});

prevButton.addEventListener('click', () => {
  container.scrollBy({ top: 0, left: -500, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  container.scrollBy({ top: 0, left: +500, behavior: 'smooth' });
});

const toggleModal = (type, section, targetFilter) => {
  switch (type) {
    case 'addguests':
      const whoButton = document.querySelector('[data-testid=structured-search-input-field-guests-button]').classList;
      whoButton.contains('header__search-tabs-filter-btn-container-inactive')
        ? whoButton.replace(
          'header__search-tabs-filter-btn-container-inactive',
          'header__search-tabs-filter-btn-container-active'
        )
        : whoButton.replace(
          'header__search-tabs-filter-btn-container-active',
          'header__search-tabs-filter-btn-container-inactive'
        );

      const searchWho = document.querySelector('#search-who').classList;
      searchWho.contains('hidden')
        ? searchWho.remove('hidden')
        : searchWho.add('hidden');
      break;

    case 'anyweek':
      targetFilter = targetFilter || document.querySelector('.header__search-tabs-filter-dates-container .header__search-tabs-filter-btn-container.header__search-tabs-filter-btn-container-active')
      const targetDateButton = targetFilter?.classList || document.querySelector('[data-testid="structured-search-input-field-split-dates-0"]').classList
      targetDateButton.contains(
        'header__search-tabs-filter-btn-container-inactive'
      )
        ? targetDateButton.replace(
          'header__search-tabs-filter-btn-container-inactive',
          'header__search-tabs-filter-btn-container-active'
        )
        : targetDateButton.replace(
          'header__search-tabs-filter-btn-container-active',
          'header__search-tabs-filter-btn-container-inactive'
        );

      const anyweekPanel = document.querySelector('#anyweek-panel').classList;
      anyweekPanel.contains('hidden')
        ? anyweekPanel.remove('hidden')
        : anyweekPanel.add('hidden');
      break;

    case 'anywhere':
      const anywhereLabel = document.querySelectorAll(
        '.header__search-tabs-filter-where-hide, .header__search-tabs-filter-where-show'
      )
        .forEach((target) => {
          const classList = target.classList;
          classList.contains('header__search-tabs-filter-where-hide')
            ? classList.replace(
              'header__search-tabs-filter-where-hide',
              'header__search-tabs-filter-where-show'
            )
            : classList.replace(
              'header__search-tabs-filter-where-show',
              'header__search-tabs-filter-where-hide'
            );
        });

      const content = document.querySelector(
        '.header__search-tabs-filter-where-body'
      ).classList;
      content.contains('header__search-tabs-filter-where-body-show')
        ? content.remove('header__search-tabs-filter-where-body-show')
        : content.add('header__search-tabs-filter-where-body-show');
      break;

    default:
      return;
  }

  if (section === 'panel') return;

  const header = document.querySelectorAll('.header__search-tabs-hide, .header__search-tabs-show').forEach((target) => {
    const classList = target.classList;
    classList.contains('header__search-tabs-hide')
      ? classList.replace(
        'header__search-tabs-hide',
        'header__search-tabs-show'
      )
      : classList.replace(
        'header__search-tabs-show',
        'header__search-tabs-hide'
      );
  });

  const filters = document.querySelectorAll('.header__search-content, .l1h6eamc').forEach((target) => {
    const classList = target.classList;
    classList.contains('header__search-content')
      ? classList.replace('header__search-content', 'l1h6eamc')
      : classList.replace('l1h6eamc', 'header__search-content');
  });

  const filtersWrapper = document.querySelectorAll('.header__search-tabs-content-transition-hide, .header__search-tabs-content-transition-show').forEach((target) => {
    const classList = target.classList;
    classList.contains('header__search-tabs-content-transition-hide')
      ? classList.replace(
        'header__search-tabs-content-transition-hide',
        'header__search-tabs-content-transition-show'
      )
      : classList.replace(
        'header__search-tabs-content-transition-show',
        'header__search-tabs-content-transition-hide'
      );
  });

  const searchTablPanel = document.querySelector('#search-tabpanel').classList;
  searchTablPanel.contains('header__search-tabs-filter-hide')
    ? searchTablPanel.replace(
      'header__search-tabs-filter-hide',
      'header__search-tabs-filter-show'
    )
    : searchTablPanel.replace(
      'header__search-tabs-filter-show',
      'header__search-tabs-filter-hide'
    );

  const searchButton = document.querySelectorAll('.header__search-tabs-filter-searchBtn-hide, .header__search-tabs-filter-searchBtn-show').forEach((target) => {
    const classList = target.classList;
    classList.contains('header__search-tabs-filter-searchBtn-hide')
      ? classList.replace(
        'header__search-tabs-filter-searchBtn-hide',
        'header__search-tabs-filter-searchBtn-show'
      )
      : classList.replace(
        'header__search-tabs-filter-searchBtn-show',
        'header__search-tabs-filter-searchBtn-hide'
      );
  });

  const searchButtonIcon = document.querySelector('#search-btn-text').classList;
  searchButtonIcon.contains('hidden')
    ? searchButtonIcon.remove('hidden')
    : searchButtonIcon.add('hidden');

  const searchButtonText = document.querySelector('.header__search-tabs-filter-searchBtn-content').classList;
  searchButtonText.contains('hidden')
    ? searchButtonText.remove('hidden')
    : searchButtonText.add('hidden');

  const searchBackdrop = document.querySelector('#search-backdrop').classList;
  searchBackdrop.contains('hidden')
    ? searchBackdrop.remove('hidden')
    : searchBackdrop.add('hidden');
};

let tabId = null;
document.querySelectorAll('#anywhere-btn, #anyweek-btn, #addguests-btn').forEach((target) => {
  target.addEventListener('click', (e) => {
    const id = (tabId = e.currentTarget.id.split('-')[0]);
    toggleModal(tabId);
  });
});

const toggleModalSection = (type, targetFilter) => {
  toggleModal(tabId, 'panel');
  tabId = type
  toggleModal(tabId, 'panel', targetFilter)
}

document.querySelector('.header__search-tabs-filter-where-container').addEventListener('click', (e) => {
  e.preventDefault()
  toggleModalSection('anywhere')
})

document.querySelector('[data-testid="structured-search-input-field-split-dates-0"]').addEventListener('click', (e) => {
  e.preventDefault()
  toggleModalSection('anyweek', e.currentTarget)
})

document.querySelector('[data-testid="structured-search-input-field-split-dates-1"]').addEventListener('click', (e) => {
  e.preventDefault()
  toggleModalSection('anyweek', e.currentTarget)
})

document.querySelector('[data-testid=structured-search-input-field-guests-button]').addEventListener('click', (e) => {
  e.preventDefault()
  toggleModalSection('addguests')
})

document.addEventListener('click', (e) => {
  const modalBody = document.querySelector('.h1wqqi3k');
  if (
    !modalBody.contains(e.target) ||
    e.target.classList.contains('header__search-backdrop')
  ) {
    toggleModal(tabId);
    tabId = null;
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && tabId) {
    toggleModal(tabId);
    tabId = null;
  }
});

let scrollMove = 0;
let clickNavigation = false;

function carouselController(controller, event) {
  if (controller == 'next') {
    clickNavigation = true;

    const carousel = document.querySelector('.carousel-slider__list');
    const dots = document.querySelector('.carousel-slider__dots-content');
    const prev = document.querySelector(
      '.carousel-slider__nav-buttons[aria-label="Previous"]'
    );
    const next = document.querySelector(
      '.carousel-slider__nav-buttons[aria-label="Next"]'
    );
    const prevMobile = document.querySelector(
      '.carousel-slider__nav-page-btn[aria-label="Previous"]'
    );
    const nextMobile = document.querySelector(
      '.carousel-slider__nav-page-btn[aria-label="Next"]'
    );
    const count = document.querySelector('.carousel-slider__nav-pages');

    if (scrollMove < 9) {
      prev.style.display = 'inline-flex';
      prevMobile.removeAttribute('disabled');
      scrollMove++;
      if (scrollMove == 9) {
        next.style.display = 'none';
        nextMobile.setAttribute('disabled', false);
      }
      dots.children[scrollMove - 1].classList.remove(
        'carousel-slider__dot-item-active'
      );
      dots.children[scrollMove].classList.add(
        'carousel-slider__dot-item-active'
      );
      carousel.scrollBy(carousel.scrollWidth / 10 / 2, 0);
      count.innerHTML = scrollMove + 1 + '/ 10';
    }

    setTimeout(() => {
      clickNavigation = false;
    }, 1000);
  } else if (controller == 'prev') {
    clickNavigation = true;
    const carousel = document.querySelector('.carousel-slider__list');
    const dots = document.querySelector('.carousel-slider__dots-content');
    const prev = document.querySelector(
      '.carousel-slider__nav-buttons[aria-label="Previous"]'
    );
    const next = document.querySelector(
      '.carousel-slider__nav-buttons[aria-label="Next"]'
    );
    const prevMobile = document.querySelector(
      '.carousel-slider__nav-page-btn[aria-label="Previous"]'
    );
    const nextMobile = document.querySelector(
      '.carousel-slider__nav-page-btn[aria-label="Next"]'
    );
    const count = document.querySelector('.carousel-slider__nav-pages');

    if (scrollMove > 0) {
      next.style.display = 'inline-flex';
      nextMobile.removeAttribute('disabled');
      scrollMove--;
      if (scrollMove == 0) {
        prev.style.display = 'none';
        prevMobile.setAttribute('disabled', false);
      }
      dots.children[scrollMove + 1].classList.remove(
        'carousel-slider__dot-item-active'
      );
      dots.children[scrollMove].classList.add(
        'carousel-slider__dot-item-active'
      );
      carousel.scrollBy(-(carousel.scrollWidth / 10) / 2, 0);
      count.innerHTML = scrollMove + 1 + '/ 10';
    }
    setTimeout(() => {
      clickNavigation = false;
    }, 1000);
  } else if (controller == 'scroll') {
    if (clickNavigation == false) {
      const count = Math.round(
        event.target.scrollLeft / event.target.offsetWidth
      );
      const dots = document.querySelector('.carousel-slider__dots-content');
      const page = document.querySelector('.carousel-slider__nav-pages');
      const prev = document.querySelector(
        '.carousel-slider__nav-buttons[aria-label="Previous"]'
      );
      const next = document.querySelector(
        '.carousel-slider__nav-buttons[aria-label="Next"]'
      );
      const prevMobile = document.querySelector(
        '.carousel-slider__nav-page-btn[aria-label="Previous"]'
      );
      const nextMobile = document.querySelector(
        '.carousel-slider__nav-page-btn[aria-label="Next"]'
      );

      // console.log(count);
      // console.log(scrollMove);

      if (count > scrollMove) {
        scrollMove = count;
        if (scrollMove > 0) {
          prev.style.display = 'inline-flex';
          prevMobile.removeAttribute('disabled');
          if (scrollMove == 9) {
            next.style.display = 'none';
            nextMobile.setAttribute('disabled', false);
          }
          dots.children[scrollMove - 1].classList.remove(
            'carousel-slider__dot-item-active'
          );
          dots.children[scrollMove].classList.add(
            'carousel-slider__dot-item-active'
          );
          page.innerHTML = scrollMove + 1 + '/ 10';
        }
      } else if (count < scrollMove) {
        scrollMove = count;
        if (scrollMove < 9) {
          next.style.display = 'inline-flex';
          nextMobile.removeAttribute('disabled');
          if (scrollMove == 0) {
            prev.style.display = 'none';
            prevMobile.setAttribute('disabled', false);
          }
          dots.children[scrollMove + 1].classList.remove(
            'carousel-slider__dot-item-active'
          );
          dots.children[scrollMove].classList.add(
            'carousel-slider__dot-item-active'
          );
          page.innerHTML = scrollMove + 1 + '/ 10';
        }
      }
    }
  }
}
document
  .querySelector('.carousel-slider__nav-buttons[aria-label="Previous"]')
  .addEventListener('click', (e) => {
    carouselController('prev');
  });

document
  .querySelector('.carousel-slider__nav-buttons[aria-label="Next"]')
  .addEventListener('click', (e) => {
    carouselController('next');
  });

document
  .querySelector('.carousel-slider__nav-page-btn[aria-label="Previous"]')
  .addEventListener('click', (e) => {
    carouselController('prev');
  });

document
  .querySelector('.carousel-slider__nav-page-btn[aria-label="Next"]')
  .addEventListener('click', (e) => {
    carouselController('next');
  });

document
  .querySelector('.carousel-slider__list')
  .addEventListener('scroll', (e) => {
    carouselController('scroll', e);
    // console.dir(e.target);
    // console.log(e.target.scrollLeft);
  });

let isPause = false;
const newYorkCard = document.querySelector('#newYorkCard');
const newYorkCardPause = document.querySelector('#newYorkCardPause');
const newYorkCardPlay = document.querySelector('#newYorkCardPlay');

newYorkCard.addEventListener('mouseenter', (e) => {
  e.target.querySelector('#newYorkCardVid').classList.add('i1ttw8c4');
  e.target
    .querySelector('.card-alt-4__overlay-bottom')
    .classList.remove('invisible');
  if (!isPause) e.target.querySelector('video').play();
});

newYorkCard.addEventListener('mouseleave', (e) => {
  e.target.querySelector('#newYorkCardVid').classList.remove('i1ttw8c4');
  e.target
    .querySelector('.card-alt-4__overlay-bottom')
    .classList.add('invisible');
  e.target.querySelector('video').pause();
});

newYorkCardPause.addEventListener('click', (e) => {
  e.currentTarget.classList.add('hidden');
  e.currentTarget
    .closest('.card-alt-4__overlay-bottom')
    .querySelector('#newYorkCardPlay')
    .classList.remove('hidden');
  e.currentTarget.closest('.card-alt-4').querySelector('video').pause();
  isPause = true;
});

newYorkCardPlay.addEventListener('click', (e) => {
  e.currentTarget.classList.add('hidden');
  e.currentTarget
    .closest('.card-alt-4__overlay-bottom')
    .querySelector('#newYorkCardPause')
    .classList.remove('hidden');
  e.currentTarget.closest('.card-alt-4').querySelector('video').play();
  isPause = false;
});

const discoverSunnyCard = document.querySelector('#discoverSunnyCard');
let discoverSunnyCardInterval;
let discoverSunnyCardCounter = 0;
const discoverSunnyCardItems = discoverSunnyCard
  .querySelector('.m18vqd2l')
  .querySelectorAll('.i4bgxyv');

discoverSunnyCard.addEventListener('mouseenter', (e) => {
  discoverSunnyCardInterval = setInterval(() => {
    discoverSunnyCardItems.forEach((el) => {
      el.classList.remove('i1ttw8c4');
      el.classList.remove('i16nzgyh');
    });

    discoverSunnyCardItems[discoverSunnyCardCounter].classList.add('i1ttw8c4');
    discoverSunnyCardItems[discoverSunnyCardCounter].classList.add('i16nzgyh');

    if (discoverSunnyCardCounter !== discoverSunnyCardItems.length - 1) {
      discoverSunnyCardCounter = discoverSunnyCardCounter + 1;
    } else {
      discoverSunnyCardCounter = 0;
    }
  }, 2500);
});

discoverSunnyCard.addEventListener('mouseleave', () => {
  clearInterval(discoverSunnyCardInterval);
  discoverSunnyCardCounter = 0;
  discoverSunnyCardItems.forEach((el) => {
    el.classList.remove('i1ttw8c4');
    el.classList.remove('i16nzgyh');
  });
});

const cardAltCarousel = () => {
  // hide controls by default
  document
    .querySelectorAll(
      '.card-alt-1__nav-btn-wrapper, .card-alt-1__pointer-events'
    )
    .forEach((el) => {
      el.classList.add('invisible');
    });

  // show controls on hover
  document.querySelectorAll('.card-alt-1__media-container').forEach((el) => {
    el.addEventListener('mouseenter', (e) => {
      e.currentTarget
        .querySelectorAll(
          '.card-alt-1__nav-btn-wrapper, .card-alt-1__pointer-events'
        )
        .forEach((el) => {
          el.classList.replace('invisible', 'card-alt-1__controls-active');
        });
    });
  });

  document.querySelectorAll('.card-alt-1__media-container').forEach((el) => {
    el.addEventListener('mouseleave', (e) => {
      e.currentTarget
        .querySelectorAll(
          '.card-alt-1__nav-btn-wrapper, .card-alt-1__pointer-events'
        )
        .forEach((el) => {
          el.classList.replace('card-alt-1__controls-active', 'invisible');
        });
    });
  });

  const card = document.querySelectorAll('.card-alt-1');

  card.forEach((target) => {
    const slides = target.querySelectorAll(
      '.card-alt-1__slide, .card__carousel-item'
    );
    const cardSlides = target.querySelector('.card__slides');
    const width = target.querySelector(
      '.card-alt-1__slide, .card__carousel-item'
    ).offsetWidth;
    let size = 0;
    let counter = 0;
    const nextBtn = target.querySelector('[aria-label="Next image"]');
    const prevBtn = target.querySelector('[aria-label="Previous image"]');

    prevBtn.classList.add('invisible');

    // creates bullets
    for (let x = 0; x < slides.length; x++) {
      const bullet = document.createElement('span');

      bullet.classList.add(
        x === 0
          ? 'pagination-bullets__item--active'
          : 'pagination-bullets__item'
      );

      bullet.setAttribute(
        'style',
        x === slides.length - 2 // 2nd to last
          ? 'transform: scale(0.833333)'
          : x === slides.length - 1 // last
            ? 'transform: scale(0.666667)'
            : 'transform: scale(1)'
      );

      target.querySelector('.pagination-bullets__list').appendChild(bullet);
    }

    const bullets = target.querySelectorAll('.pagination-bullets__list > *');

    const updateBullets = () => {
      bullets.forEach((el) => {
        el.classList.replace(
          'pagination-bullets__item--active',
          'pagination-bullets__item'
        );
      });
      bullets[counter].classList.replace(
        'pagination-bullets__item',
        'pagination-bullets__item--active'
      );
    };

    nextBtn.addEventListener('click', (e) => {
      if (counter === slides.length - 1) return;

      counter += 1;
      size = width * counter;

      e.currentTarget
        .closest('.card-alt-1')
        .querySelector('.card__slides')
        .scrollTo({
          left: size,
          behavior: 'smooth',
        });
    });

    prevBtn.addEventListener('click', (e) => {
      if (counter === 0) return;

      counter -= 1;
      size = width * counter;

      e.currentTarget
        .closest('.card-alt-1')
        .querySelector('.card__slides')
        .scrollTo({
          left: size,
          behavior: 'smooth',
        });
    });

    cardSlides.addEventListener('scroll', (e) => {
      const count = Math.round(e.target.scrollLeft / width);
      counter = count;
      updateBullets();

      prevBtn.classList.remove('invisible');
      nextBtn.classList.remove('invisible');
      if (counter === slides.length - 1) nextBtn.classList.add('invisible');
      if (counter === 0) prevBtn.classList.add('invisible');
    });
  });
};

cardAltCarousel();

function checkboxFilter() {
  document.querySelectorAll('.filter-checkbox').forEach((target) => {
    target.addEventListener('click', (e) => {
      e.preventDefault();
      const checkbox = target.querySelector(
        '.explore-filter-menu__list-checkbox'
      );
      checkbox.classList.toggle('_1v5cvwv4');
      // console.log(checkbox.classList.toggle('_1v5cvwv4'));
    });
  });
}

checkboxFilter();

function showMoreFilter() {
  document.querySelectorAll('.show-more').forEach((target) => {
    target.addEventListener('click', (e) => {
      e.preventDefault();
      const more = document.querySelector('#' + target.attributes[2].value);
      if (more.classList.contains('hidden')) {
        more.classList.remove('hidden');
        target.children[0].innerHTML = 'Show less';
      } else if (!more.classList.contains('hidden')) {
        more.classList.add('hidden');
        target.children[0].innerHTML = 'Show more';
      }
    });
  });
}

showMoreFilter();

function propertyTypeFilter() {
  document.querySelectorAll('.property-type').forEach((target) => {
    target.addEventListener('click', (e) => {
      e.preventDefault();
      if (target.classList.contains('btn-card')) {
        target.classList.add('btn-card-active');
        target.classList.remove('btn-card');
      } else if (target.classList.contains('btn-card-active')) {
        target.classList.add('btn-card');
        target.classList.remove('btn-card-active');
      }
    });
  });
}

propertyTypeFilter();

function toggleSwitchFilter() {
  document.querySelectorAll('.toggle-switch').forEach((target) => {
    target.addEventListener('click', (e) => {
      e.preventDefault();
      if (target.classList.contains('form__switch')) {
        target.classList.add('form__switch--checked');
        target.classList.remove('form__switch');
        target.children[0].classList.add('form__switch-toggle-checked');
        target.children[0].classList.remove('form__switch-toggle');
        target.children[0].children[0].classList.remove('hidden');
      } else if (target.classList.contains('form__switch--checked')) {
        target.classList.add('form__switch');
        target.classList.remove('form__switch--checked');
        target.children[0].classList.add('form__switch-toggle');
        target.children[0].classList.remove('form__switch-toggle-checked');
        target.children[0].children[0].classList.add('hidden');
      }
    });
  });
}

toggleSwitchFilter();

function multipleSelectFilter(selector) {
  document.querySelectorAll(selector).forEach((target) => {
    target.addEventListener('click', (e) => {
      e.preventDefault();
      if (target.classList.contains('badge-dark')) {
        document.querySelectorAll(selector).forEach((el) => {
          el.classList.add('badge-dark');
          el.classList.remove('badge-dark-active');
        });
        target.classList.add('badge-dark-active');
        target.classList.remove('badge-dark');
      }
    });
  });
}

multipleSelectFilter('.bedrooms-count');
multipleSelectFilter('.beds-count');
multipleSelectFilter('.bathroom-count');

const multipleSlider = ({ btnCls, parentCls, slideWrapperCls, step }) => {
  step = step || 1;

  const nextBtns = document.querySelectorAll(`${btnCls}[aria-label=Next]`);
  const prevBtns = document.querySelectorAll(`${btnCls}[aria-label=Previous]`);

  const getCurrentSlideWrapper = (e) => {
    return e.currentTarget.closest(parentCls).querySelector(slideWrapperCls);
  };

  const apply = (e, size) => {
    if (getCurrentSlideWrapper(e).style.transform) {
      getCurrentSlideWrapper(e).style.transform = `translateX(-${size}px)`;
    } else {
      getCurrentSlideWrapper(e).scrollTo({
        left: size,
        behavior: 'smooth',
      });
    }
  };

  const getItems = (e) => {
    return e.currentTarget.closest(parentCls).querySelectorAll(
      slideWrapperCls
        .split(',')
        .map((item) => (item += '>*'))
        .join()
    );
  };

  const exploreFilterCls =
    '.explore-filter__controls-next, .explore-filter__controls-prev, .header-filter__controls-btn-prev, .header-filter__controls-btn-next';

  const invisible = 'visibility: hidden; opacity: 0';
  const visible = 'visibility: visible; opacity: 1';

  const hideBtn = (el) => {
    if (
      el.classList.contains('carousel-control-btn') ||
      el.classList.contains('new__arrow-button')
    ) {
      el.setAttribute('disabled', true);
    } else {
      if (el.closest(exploreFilterCls)) {
        el.closest(exploreFilterCls).style = invisible;
      } else {
        el.classList.add('invisible');
      }
    }
  };

  const showBtn = (el) => {
    if (
      el.classList.contains('carousel-control-btn') ||
      el.classList.contains('new__arrow-button')
    ) {
      el.removeAttribute('disabled');
    } else {
      if (el.closest(exploreFilterCls)) {
        el.closest(exploreFilterCls).style = visible;
      } else {
        el.classList.remove('invisible');
      }
    }
  };

  prevBtns.forEach((el) => hideBtn(el));

  nextBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let counter = parseInt(getCurrentSlideWrapper(e).dataset.counter || 0);
      const items = getItems(e);
      const width = items[0].offsetWidth;

      if (counter >= items.length - 1) return;

      counter += step;
      console.log(counter, items.length - 1);

      showBtn(
        e.currentTarget
          .closest(parentCls)
          .querySelector(`${btnCls}[aria-label=Previous]`)
      );

      if (counter >= items.length - 1) hideBtn(e.currentTarget);

      getCurrentSlideWrapper(e).setAttribute('data-counter', counter);
      const size = width * counter;

      apply(e, size);
    });
  });

  prevBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
      let counter = parseInt(getCurrentSlideWrapper(e).dataset.counter || 0);
      const items = getItems(e);
      const width = items[0].offsetWidth;

      if (counter === 0) return;

      counter -= step;
      console.log(counter, items.length - 1);

      showBtn(
        e.currentTarget
          .closest(parentCls)
          .querySelector(`${btnCls}[aria-label=Next]`)
      );

      if (counter === 0) hideBtn(e.currentTarget);

      getCurrentSlideWrapper(e).setAttribute('data-counter', counter);
      const size = width * counter;

      apply(e, size);
    });
  });
};

multipleSlider({
  btnCls: '.header-filter__controls-btn',
  parentCls: '.header-filter__container',
  slideWrapperCls: '.card__slides',
  step: 10,
});

multipleSlider({
  btnCls: '.explore-filter__controls-btn',
  parentCls: '.explore-flex-relative',
  slideWrapperCls: '.explore-filter__carousel',
  step: 10,
});

multipleSlider({
  btnCls: '.carousel-control-btn',
  parentCls: '.wh-full',
  slideWrapperCls: '.explore-grouped-listings-carousel-scroll-area',
});

multipleSlider({
  btnCls: '.btn-nav',
  parentCls: '.position__relative',
  slideWrapperCls: '.feature__airbnb-ul',
  step: 3,
});

multipleSlider({
  btnCls: '.nav-carousel-control-btn',
  parentCls: '.flex-items',
  slideWrapperCls: '.nav-carousel-inactive',
  step: 8,
});

multipleSlider({
  btnCls: '.new__arrow-button',
  parentCls: '.position__relative',
  slideWrapperCls: '.explore__list',
  step: 6,
});

multipleSlider({
  btnCls: '.carousel-control-btn',
  parentCls: '.flex-column',
  slideWrapperCls: '.imagetext-nav-carousel-scroll',
  step: 3,
});

multipleSlider({
  btnCls: '.new__arrow-button',
  parentCls: '.position__relative',
  slideWrapperCls: '.explore__list-w-rapper-mx-0',
  step: 3,
});

document.querySelectorAll('.activity__type button').forEach((e) => {
  e.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active');
  });
});

document
  .querySelectorAll(
    '.explore-filter__carousel button.btn-filter-rounded-sm-secondary'
  )
  .forEach((e) => {
    e.addEventListener('click', (e) => {
      document
        .querySelector(
          '.explore-filter__carousel button.btn-filter-rounded-sm-secondary.active'
        )
        ?.classList.remove('active');
      e.currentTarget.classList.add('active');
    });
  });

document
  .querySelectorAll('.header-filter__container-bg button.header-filter')
  .forEach((e) => {
    e.addEventListener('click', (e) => {
      document
        .querySelector(
          '.header-filter__container-bg button.header-filter.header-filter--active'
        )
        ?.classList.remove('header-filter--active');
      e.currentTarget.classList.add('header-filter--active');
    });
  });


document.querySelector('.toast-bottom-right button[aria-label=Close]').addEventListener('click', (el) => {
  el.currentTarget.closest('.toast-bottom-right > div').classList.add('toast-enter', 'toast-exit');
})


document.querySelector('input#query').addEventListener('keyup', (el) => {
  const inputLength = el.currentTarget.value.length

  if (inputLength >= 2) {
    document.querySelector('._jibw4hu').classList.remove('hidden')
  } else {
    document.querySelector('._jibw4hu').classList.add('hidden')
  }
})

document.querySelector('#checkin_button').addEventListener('click', (el) => {
  if (document.querySelector('._1ldjf5n6').classList.contains('hidden')) {
    document.querySelector('._1ldjf5n6').classList.remove('hidden')
  } else {
    document.querySelector('._1ldjf5n6').classList.add('hidden')
  }
})

if (document.querySelector('._1w2nzi8') != null) {
  const close = document.querySelector('._1w2nzi8');
  const modal = document.querySelector('.modal-footer');
  close.addEventListener('click', (e) => {
    if (e.target.classList.contains('_1w2nzi8')) {
      modal.classList.replace('_n0t6xkk', '_e3o26jf')
      setTimeout(() => {
        document.querySelector('._1w2nzi8').classList.add('hidden')
      }, 700);
      document.querySelector('._1t0jy5tw').classList.add('hidden')
    }
  });
}

if (document.querySelector('#close-modal-footer') != null) {
  const close = document.querySelector('#close-modal-footer');
  const modal = document.querySelector('.modal-footer');
  close.addEventListener('click', () => {
    modal.classList.replace('_n0t6xkk', '_e3o26jf')
    setTimeout(() => {
      document.querySelector('._1w2nzi8').classList.add('hidden')
    }, 700);
    document.querySelector('._1t0jy5tw').classList.add('hidden')
  });
}

if (document.querySelector('#open-modal-footer') != null) {
  const close = document.querySelector('#open-modal-footer');
  const modal = document.querySelector('.modal-footer');
  close.addEventListener('click', () => {
    modal.classList.replace('_e3o26jf', '_n0t6xkk')
    document.querySelector('._1w2nzi8').classList.remove('hidden')
    document.querySelector('._1t0jy5tw').classList.remove('hidden')
  });
}

// if(document.querySelector('#open-modal-filter-list') != null){
//   const close = document.querySelector('#open-modal-filter-list');
//   const modal = document.querySelector('.modal-filter-list');
//   close.addEventListener('click', () => {
//       modal.classList.replace('_dsadsad', '_wheg71v')
//       document.querySelector('._virdaj').classList.remove('hidden') 
//       document.querySelector('._1t0jy5tw').classList.remove('hidden')
//   });
// }


document
  .querySelectorAll('.explore-filter__wrapper')
  .forEach((e) => {
    e.addEventListener('click', (e) => {
      document.querySelector(
        `#${e.currentTarget.id}`
      ).nextElementSibling.classList.toggle('showFilter')

      if (!e.currentTarget.querySelector('svg').style.transform) {
        e.currentTarget.querySelector('svg').style.transform = 'rotate(180deg)'
      } else {
        e.currentTarget.querySelector('svg').style.removeProperty('transform')
      }
    });
  });

  document.addEventListener('click', (e) => {

    if (!e.target.closest('.dialog__wrapper') && !e.target.closest('.explore-filter__wrapper')){

      document.querySelectorAll('.dialog__wrapper.showFilter').forEach((el) => {
        el.classList.remove('showFilter')
      })


        document.querySelectorAll('.explore-filter__wrapper svg').forEach((el) => {
          el.style.removeProperty('transform')
        })

    }
  })

  document.querySelectorAll('.explore-header__date-category-wrapper > button').forEach((el) =>  {
    el.addEventListener('click', (e) => {
      e.currentTarget.closest('#chip-group-super_flexible_lengths').querySelector('.explore-header__date-category-radio-2').classList.replace('explore-header__date-category-radio-2', 'explore-header__date-category-radio-1')
    
      e.currentTarget.classList.replace('explore-header__date-category-radio-1', 'explore-header__date-category-radio-2')

      document.querySelector('#subcategory-item-super_flexible_lengths').innerText = `Stay for a ${e.currentTarget.innerText.toLowerCase()}`

      document.querySelector('.header__search-tabs-filter-btn-text-bold').innerText = `Any ${e.currentTarget.innerText.toLowerCase()}`
    })
  })

  // handles Choose dates and I'm flexible
  document.querySelectorAll('.header__search-tabs-filter-body-date-tabs-container > button').forEach((el) => {
    el.addEventListener('click', (e) => {
      const parent = document.querySelector('.header__search-tabs-filter-dates-container')



    if (e.currentTarget.innerText.includes('flexible')) {
parent.querySelectorAll('.header__search-tabs-filter-content')[1].classList.add('hidden')

      parent.querySelector('.header__search-tabs-filter-btn-label').innerText = 'When'
      parent.querySelector('.header__search-tabs-filter-btn-text').innerText = 'Any weekend'
      parent.querySelector('.header__search-tabs-filter-btn-text').classList.replace('header__search-tabs-filter-btn-text', 'header__search-tabs-filter-btn-text-bold')
    } else {
parent.querySelectorAll('.header__search-tabs-filter-content')[1].classList.remove('hidden')
      parent.querySelector('.header__search-tabs-filter-btn-label').innerText = 'Check in'
      parent.querySelector('.header__search-tabs-filter-btn-text-bold').innerText = 'Add dates'
      parent.querySelector('.header__search-tabs-filter-btn-text-bold').classList.replace(  'header__search-tabs-filter-btn-text-bold', 'header__search-tabs-filter-btn-text')
    }

    
      document.querySelector('.header__search-tabs-filter-btn-text-bold').innerText = `Any ${document.querySelector('.explore-header__date-category-radio-2').innerText.toLowerCase()}`
    })
  })