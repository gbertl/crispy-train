document.querySelectorAll('[role=tab]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // please add this role attribute to the parent to make handler work
    const parent = e.target.closest('[role=tablistcontainer]');
    parent
      .querySelectorAll('[role=tab]')
      .forEach((tabBtn) =>
        tabBtn.classList.replace(
          'tab__btn-active',
          'tab__btn'
        )
      );
    e.target.classList.replace(
      'tab__btn',
      'tab__btn-active'
    );
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

    const openModal = () => {
      document.body.classList.add('overflow-y-hidden');
      modal.classList.remove('hidden');
      section?.classList.remove('hidden');
    };
    const closeModal = () => {
      document.body.classList.remove('overflow-y-hidden');
      modal.classList.add('hidden');
      section?.classList.add('hidden');
    };

    e.addEventListener('click', (e) => {
      e.preventDefault();

      openModal();

      const buttonClose = modal.querySelectorAll('[data-button="close"]');

      buttonClose.forEach((e) => {
        e.addEventListener('click', (e) => {
          event.preventDefault();

          closeModal();
        });
      });
    });

    document.addEventListener('click', (e) => {
      const modalBody = modal.querySelector('.contents');
      if (
        modalBody &&
        !modalBody.contains(e.target) &&
        !e.target.closest('[data-modal]')
      ) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && closeModal();
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
})();
