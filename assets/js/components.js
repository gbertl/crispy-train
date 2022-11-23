const handleSaveUnsaveWishlist = () => {
  const saveBtns = document.querySelectorAll('[aria-label="Save this Experience"], [aria-label="Add listing to a list"]');
  const unsaveBtns = document.querySelectorAll('[aria-label="Unsave this Experience"]');
  const wishlistModalBtns = document.querySelectorAll('.button-container__wrapper');
  let currentCard;

  const createUnsaveBtn = () => {
    let html = `
    <button aria-label="Unsave this Experience" type="button" class="explore__list-heart explore__list-heart-font dir dir-ltr">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="
        display: block;
        fill: var(
          --primary-color
        );
        height: 24px;
        width: 24px;
        stroke: var(
          --white
        );
        stroke-width: 2;
        overflow: visible;
      ">
        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
      </svg>
    </button>
    `

    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;

    return template.content.firstChild
  }


  const createSaveBtn = () => {
    let html = `
    <button aria-label="Save this Experience" type="button" class="explore__list-heart explore__list-heart-font dir dir-ltr" data-modal="#save-modal">
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="
          display: block;
          fill: rgba(
            0,
            0,
            0,
            0.5
          );
          height: 24px;
          width: 24px;
          stroke: var(
            --white
          );
          stroke-width: 2;
          overflow: visible;
        ">
        <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
      </svg>
    </button>
    `

    const template = document.createElement('template');
    html = html.trim();
    template.innerHTML = html;

    return template.content.firstChild
  }

  saveBtns.forEach((el) => {
    el.setAttribute('data-modal', '#save-modal')

    el.addEventListener('click', (e) => {
      currentCard = e.currentTarget.closest('[role]')
    })
  })

  unsaveBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.currentTarget.replaceWith(createSaveBtn())

      document.querySelectorAll('.snackbar-text-wrapper > div').forEach((el, idx) => {
         el.style = idx === 0 ? 'display: none !important' : 'display: block !important';
      })
      document.querySelector('.snackbar-view-hide').classList.replace('snackbar-view-hide', 'snackbar-view-show')

      setTimeout(() => {
      document.querySelector('.snackbar-view-show').classList.replace('snackbar-view-show', 'snackbar-view-hide')
      }, 2000)
    })
  })

  wishlistModalBtns.forEach((el) => {
    el.addEventListener('click', (e) => {
      currentCard.querySelector('[aria-label="Save this Experience"], [aria-label="Add listing to a list"]').replaceWith(createUnsaveBtn())
      e.currentTarget.closest('#save-modal').querySelector('[data-button=close]').click();

      document.querySelectorAll('.snackbar-text-wrapper > div').forEach((el, idx) => {
         el.style = idx === 0 ? 'display: block !important' : 'display: none !important' ;
      })
      document.querySelector('.snackbar-view-hide').classList.replace('snackbar-view-hide', 'snackbar-view-show')

      setTimeout(() => {
      document.querySelector('.snackbar-view-show').classList.replace('snackbar-view-show', 'snackbar-view-hide')
      }, 2000)
    });
  });


}

handleSaveUnsaveWishlist();

document.querySelectorAll('[role=tab]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // please add this role attribute to the parent to make handler work
    const parent = e.target.closest('[role=tablistcontainer]');

    parent
      .querySelectorAll('[role=tab]')
      .forEach((tabBtn) => {
          if (tabBtn.classList.contains('header__search-tabs-filter-body-date-tabs-active')) { 
            tabBtn.classList.replace(
              'header__search-tabs-filter-body-date-tabs-active',
              'header__search-tabs-filter-body-date-tabs-btn'
            )

          } else {
            tabBtn.classList.replace(
              'tab__btn-active',
              'tab__btn'
            )
          }
        }
      );

    if (e.currentTarget.classList.contains('header__search-tabs-filter-body-date-tabs-btn')) {
      e.currentTarget.classList.replace(
        'header__search-tabs-filter-body-date-tabs-btn',
        'header__search-tabs-filter-body-date-tabs-active'
      );
    } else {
      e.currentTarget.classList.replace(
        'tab__btn',
        'tab__btn-active'
      );
    }

    parent
      .querySelectorAll('[role=tabpanel]')
      .forEach((panel) => panel.setAttribute('hidden', true));
    parent
      .querySelector(`#${e.target.getAttribute('aria-controls')}`)
      .removeAttribute('hidden');
  });
});

const handleModal = ({ btnOpenSelector, btnCloseSelector, modalSelector }) => {
  document.querySelectorAll(btnOpenSelector).forEach((element) => {
    element.addEventListener('click', () => {
      document.body.classList.add('overflow-y-hidden');
      document.querySelector(modalSelector).classList.remove('hidden');
    });
  });

  document.querySelectorAll(btnCloseSelector).forEach((element) => {
    element.addEventListener('click', () => {
      document.body.classList.remove('overflow-y-hidden');
      document.querySelector(modalSelector).classList.add('hidden');
    });
  });
};

(() => {
  // data-modal
  document.querySelectorAll('[data-modal]').forEach((e) => {
    const modal = document.querySelector(e.dataset.modal);
    const section = document.querySelector(e.dataset.lightbox);

    const lightboxControls = section?.querySelector('.mobile-carousel__controls')
    const lcPrev = lightboxControls?.querySelector('button[aria-label="Previous"]')
    const lcNext = lightboxControls?.querySelector('button[aria-label="Next"]')

    const sections = modal?.querySelectorAll('section')

    const mobileScrollSection = modal?.querySelector('.carousel-scroll-snap')
    const mobileScrollSectionList = mobileScrollSection?.querySelectorAll('li')
    const mobileLightboxItemCount = modal?.querySelector('.lightbox__counter')

    if (mobileScrollSectionList && mobileLightboxItemCount) {
      mobileLightboxItemCount.querySelector('span:first-child').innerHTML = `Showing photo 1 of ${mobileScrollSectionList.length}`
      mobileLightboxItemCount.querySelector('span:nth-child(2)').innerHTML = `1 / ${mobileScrollSectionList.length}`
    }

    let currentScrolledValue = 0
    mobileScrollSection?.addEventListener('scroll', (e) => {
      if (e.target.scrollLeft % e.target.offsetWidth === 0) {
        if (e.target.scrollLeft !== currentScrolledValue) {
          let currentItem = mobileScrollSection.querySelector('li[aria-hidden="false"]')
          currentItem.ariaHidden = true

          let currentItemIndex;

          // previous item
          if (e.target.scrollLeft < currentScrolledValue) {
            currentItem.previousElementSibling.ariaHidden = false
            currentItemIndex = [...mobileScrollSectionList].indexOf(currentItem.previousElementSibling)
          }

          // next item
          if (e.target.scrollLeft > currentScrolledValue) {
            currentItem.nextElementSibling.ariaHidden = false
            currentItemIndex = [...mobileScrollSectionList].indexOf(currentItem.nextElementSibling)
          }

          modal.querySelector('.lightbox__counter span:first-child').innerHTML = `Showing photo ${(currentItemIndex + 1)} of ${mobileScrollSectionList.length}`
          modal.querySelector('.lightbox__counter span:nth-child(2)').innerHTML = `${(currentItemIndex + 1)} / ${mobileScrollSectionList.length}`
        }
        currentScrolledValue = e.target.scrollLeft
      }
    })

    const setControlsState = (section) => {
      const prevSectionIndex = [...sections].indexOf(section.previousElementSibling)
      const nextSectionIndex = [...sections].indexOf(section.nextElementSibling)

      const lightboxControls = section.querySelector('.mobile-carousel__controls')
      const lcPrev = lightboxControls.querySelector('button[aria-label="Previous"]')
      const lcNext = lightboxControls.querySelector('button[aria-label="Next"]')

      if (section.previousElementSibling && prevSectionIndex !== -1) {
        lcPrev.removeAttribute('style')
        lcPrev.focus()
      } else {
        lcPrev.style.visibility = 'hidden'
      }

      if (section.nextElementSibling && nextSectionIndex !== -1) {
        lcNext.removeAttribute('style')
        lcNext.focus()
      } else {
        lcNext.style.visibility = 'hidden'
      }
    }

    const prevHandler = (e) => {
      const section = e.target.closest('section')

      const prevSectionIndex = [...sections].indexOf(section.previousElementSibling)
      if (prevSectionIndex === -1) return;

      if (section) {
        section.style.visibility = 'hidden'
        if (section.previousElementSibling) {
          const prevSection = section.previousElementSibling
          prevSection.removeAttribute('style')
          setControlsState(prevSection)
        }
      }
    }

    const nextHandler = (e) => {
      const section = e.target.closest('section')

      const nextSectionIndex = [...sections].indexOf(section.nextElementSibling)
      if (nextSectionIndex === -1) return;

      if (section) {
        section.style.visibility = 'hidden'
        if (section.nextElementSibling) {
          const nextSection = section.nextElementSibling
          nextSection.removeAttribute('style')
          setControlsState(nextSection)
        }
      }
    }

    const openModal = () => {
      document.body.classList.add('hidden-vscroll');
      modal?.classList.remove('hidden');
      if (section) {
        section.removeAttribute('style')
        setControlsState(section)
      }
    }

    const closeModal = () => {

      // closing animation of modals
      if (modal.querySelector('.modal__backdrop') && modal.querySelector('div[role=dialog]')) {
        const modalBackdropStyle = modal.querySelector('.modal__backdrop').getAttribute('style')
        const dialogStyle = modal.querySelector('div[role=dialog]').getAttribute('style')

        // prepend animation if style string exist
        modal.querySelector('.modal__backdrop').style= modalBackdropStyle ? 'animation-name: keyframe_1vz6p0j !important;' + modalBackdropStyle  : 'animation-name: keyframe_1vz6p0j !important' 
        modal.querySelector('div[role=dialog]').style= dialogStyle ? 'animation-name: keyframe_1vhlqe7 !important;'+ dialogStyle  :  'animation-name: keyframe_1vhlqe7 !important'

        // removes closing animation after some delay
        setTimeout(() => {
          modal.querySelector('.modal__backdrop').style.removeProperty('animation-name')
          modal.querySelector('div[role=dialog]').style.removeProperty('animation-name')
          modal?.classList.add('hidden');
          document.body.classList.remove('hidden-vscroll');
        }, 300)
      } else {
        modal?.classList.add('hidden');
        document.body.classList.remove('hidden-vscroll');
      }

      if (section) {
        section.style.visibility = 'hidden'
        setControlsState(section)
      }
    }

    // lightbox controls
    lcPrev?.addEventListener('click', prevHandler)
    lcNext?.addEventListener('click', nextHandler)

    // data-modal click handler
    e.addEventListener('click', (e) => {
      e.preventDefault();

      openModal();

      const buttonClose = modal.querySelectorAll('[data-button="close"]');

      buttonClose.forEach((e) => {
        e.addEventListener('click', (e) => {
          closeModal();
        });
      });
    });

    modal?.querySelectorAll('[data-button="close"]').forEach((el) => {
      el.addEventListener('click', () => {
        closeModal()
      })
    })

    // handle close modal
    // document.addEventListener('click', (e) => {
    //   console.log(modal.contains(e.target), '<<< this')
    //   if (
    //     !modal?.contains(e.target) &&
    //     !e.target.closest('[data-modal]') ||
    //     e.target == modal.querySelector('[data-testid="modal-container"]')
    //   ) {
    //     closeModal();
    //   }
    // });

    // click outside
    modal?.addEventListener('click', (e) => {
      if (e.target.dataset.testid === 'modal-container') {
        closeModal()
      } 
    })


    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && closeModal();
      e.key === 'ArrowLeft' && prevHandler(e)
      e.key === 'ArrowRight' && nextHandler(e)
    });
  });

  // data-scroll
  document.querySelectorAll('[data-scroll]').forEach((e) => {
    const view = document.querySelector(e.dataset.scroll);
    e.addEventListener('click', () =>
      view?.scrollIntoView({ behavior: 'smooth' })
    );
  });

  // data-search
  document.querySelectorAll('[data-search]').forEach((currentSearchInput) => {
    const parent = currentSearchInput?.closest('form')

    const searchMenuContainer = document.querySelector(currentSearchInput.dataset.search)
    const searchMenuLoader = document.querySelector(currentSearchInput.dataset.searchLoader)
    const searchMenuResult = document.querySelector(currentSearchInput.dataset.searchResult)

    const buttonClear = parent.querySelector('.cfermtz')

    let searchLoader

    const openMenuContainer = () => {
      searchMenuContainer?.classList.remove('hidden')
      if (!currentSearchInput.hasAttribute('data-search-mobile')) {
        parent?.classList.add('cusudri')
        currentSearchInput.classList.add('focus-visible')
        currentSearchInput.setAttribute('aria-expanded', true)
        currentSearchInput.setAttribute('data-focus-visible-added', '')
        currentSearchInput.setAttribute('aria-owns', 'search-suggestions-popup')
        parent.querySelector('.ssvcg8e')?.classList.add('s67xlue')
        parent.querySelector('.sjnrf6s')?.classList.add('s1teii9t')
      }
    }

    const closeMenuContainer = () => {
      clearTimeout(searchLoader)

      currentSearchInput.blur()

      currentSearchInput.value = ''
      !buttonClear?.classList.contains('hidden')
        && buttonClear?.classList.add('hidden')

      if (!currentSearchInput.hasAttribute('data-search-mobile')) {
        !searchMenuContainer?.classList.contains('hidden')
          && searchMenuContainer?.classList.add('hidden')
      }

      !searchMenuLoader?.classList.contains('hidden')
        && searchMenuLoader?.classList.add('hidden')
      !searchMenuResult?.classList.contains('hidden')
        && searchMenuResult?.classList.add('hidden')

      if (!currentSearchInput.hasAttribute('data-search-mobile')) {
        parent?.classList.remove('cusudri')
        currentSearchInput.classList.remove('focus-visible')
        currentSearchInput.setAttribute('aria-expanded', false)
        currentSearchInput.removeAttribute('data-focus-visible-added')
        currentSearchInput.removeAttribute('aria-owns', 'search-suggestions-popup')
        parent.querySelector('.ssvcg8e')?.classList.remove('s67xlue')
        parent.querySelector('.sjnrf6s')?.classList.remove('s1teii9t')
      }
    }

    currentSearchInput.addEventListener('click', () => {
      openMenuContainer()

      buttonClear.addEventListener('click', (e) => {

      })

      document.addEventListener('click', (e) => {
        if (
          searchMenuContainer &&
          !searchMenuContainer.contains(e.target) &&
          e.target !== currentSearchInput
        ) {
          closeMenuContainer()
        }
      })

      document.addEventListener('keydown', (e) => {
        e.key === 'Escape' && closeMenuContainer();
      });
    })

    currentSearchInput.addEventListener('input', (e) => {
      clearTimeout(searchLoader)

      const value = e.target.value

      !searchMenuResult?.classList.contains('hidden')
        && searchMenuResult.classList.add('hidden')

      if (value.length) {
        !searchMenuContainer?.classList.contains('hidden')
          && searchMenuContainer?.classList.add('hidden')

        buttonClear?.classList.remove('hidden')

        searchMenuLoader?.classList.remove('hidden')
        searchLoader = setTimeout(() => {
          searchMenuLoader?.classList.add('hidden')
          searchMenuResult?.classList.remove('hidden')
          const searchValue = searchMenuResult?.querySelector('ul li:first-child > div span > strong')
          searchValue.innerHTML = value
        }, 500);

        return;
      }

      buttonClear?.classList.add('hidden')

      searchMenuContainer?.classList.contains('hidden')
        && searchMenuContainer?.classList.remove('hidden')

      searchMenuResult?.classList.add('hidden')
    })
  })

  // data-gallery
  document.querySelectorAll('[data-gallery]').forEach((e) => {
    const scrollSection = e.querySelector('ul')
    const scrollSectionList = scrollSection.querySelectorAll('li')
    const scrollCounter = e.querySelector('[data-gallery-counter]')

    if (scrollSectionList && scrollCounter) {
      scrollCounter.children[0].innerHTML = `Showing photo 1 of ${scrollSectionList.length}`
      scrollCounter.children[1].innerHTML = `1 / ${scrollSectionList.length}`
    }

    let currentScrolledValue = 0
    scrollSection?.addEventListener('scroll', (e) => {
      if (e.target.scrollLeft % e.target.offsetWidth === 0) {
        if (e.target.scrollLeft !== currentScrolledValue) {
          let currentItem = scrollSection.querySelector('li[aria-hidden="false"]')
          currentItem.ariaHidden = true

          let currentItemIndex;

          // previous item
          if (e.target.scrollLeft < currentScrolledValue) {
            currentItem.previousElementSibling.ariaHidden = false
            currentItemIndex = [...scrollSectionList].indexOf(currentItem.previousElementSibling)
          }

          // next item
          if (e.target.scrollLeft > currentScrolledValue) {
            currentItem.nextElementSibling.ariaHidden = false
            currentItemIndex = [...scrollSectionList].indexOf(currentItem.nextElementSibling)
          }

          scrollCounter.children[0].innerHTML = `Showing photo ${(currentItemIndex + 1)} of ${scrollSectionList.length}`
          scrollCounter.children[1].innerHTML = `${(currentItemIndex + 1)} / ${scrollSectionList.length}`
        }
        currentScrolledValue = e.target.scrollLeft
      }
    })
  })
})();

document.querySelectorAll('.radio__button, .radio__button-active').forEach((el) => {
  el.addEventListener('click', (el) => {
    // add radio-buttons-wrapper to make this work
    const parent = el.currentTarget.closest('.radio-buttons-wrapper')

    parent.querySelectorAll('.radio__button-active').forEach((el) => el.classList.replace('radio__button-active', 'radio__button'))

    el.currentTarget.classList.replace('radio__button', 'radio__button-active')

    parent.querySelector('[data-testid=flag-primary-button]').removeAttribute('disabled');

  })
})

document.querySelector('#report-this-next')?.addEventListener('click', (el) => {
  el.currentTarget.closest('#report-this-modal').classList.add('hidden')
  document.querySelector('#we-got-your-report-modal').classList.remove('hidden')
})

const handleSwitchToggle = () =>{
  document.querySelectorAll('.form__switch, .form__switch--checked').forEach((target) => {
    target.addEventListener('click', (e) => {
      e.preventDefault();
      if (target.classList.contains('form__switch')) {
        target.classList.add('form__switch--checked');
        target.classList.remove('form__switch');
        target.children[0].classList.add('form__switch-toggle-checked');
        target.children[0].innerHTML = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="
                                                      display: block;
                                                      fill: none;
                                                      height: 12px;
                                                      width: 12px;
                                                      stroke: currentcolor;
                                                      stroke-width: 5.33333;
                                                      overflow: visible;
                                                    ">
                                                    <path fill="none" d="m4 16.5 8 8 16-16"></path>
                                                  </svg>`;
        target.children[0].classList.remove('form__switch-toggle');
        target.children[0].children[0].classList.remove('hidden');

      } else if (target.classList.contains('form__switch--checked')) {
        target.classList.add('form__switch');
        target.classList.remove('form__switch--checked');
        target.children[0].innerHTML = '';
        target.children[0].classList.add('form__switch-toggle');
        target.children[0].classList.remove('form__switch-toggle-checked');
        target.children[0].children[0].classList.add('hidden');
      }
    });
  });
}

handleSwitchToggle();

const handleCheckboxToggle = () => {
  document.querySelectorAll('.form__check-input').forEach((el) => {
    const parent = el.closest('.flex')
    parent.addEventListener('click', (e) => {
      e.preventDefault();
      const iconWrapper = parent.querySelector(
        '.form__check-icon-wrapper'
      );
      iconWrapper.classList.toggle('form__check-icon-wrapper--active');
      iconWrapper.innerHTML = `<span class="form__check-icon"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;"><path fill="none" d="m4 16.5 8 8 16-16"></path></svg></span>`
    });
  });
}

handleCheckboxToggle();
