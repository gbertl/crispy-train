const handleTab = ({ buttonId, panelId, parentId }) => {
  document.querySelectorAll(`[id^='${buttonId}']`).forEach((el) => {
    el.addEventListener('click', (e) => {
      const parent = e.target.closest(`#${parentId}`);

      parent
        .querySelectorAll(`[id^='${buttonId}'][aria-selected=true]`)
        .forEach((el) => {
          el.setAttribute('aria-selected', false);
          el.classList.replace('tab__list-btn-primary', 'tab__list-btn-secondary');
        });

      e.target.setAttribute('aria-selected', true);
      e.target.classList.replace('tab__list-btn-secondary', 'tab__list-btn-primary');

      // first set all to hidden then remove hidden on current tab
      parent
        .querySelectorAll(`[id^='${panelId}']`)
        .forEach((el) => el.setAttribute('hidden', true));
      parent
        .querySelector(`#${e.target.getAttribute('aria-controls')}`)
        .removeAttribute('hidden');
    });
  });
};

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

// modal alternative
(() => {
  const modals = document.querySelectorAll('[data-modal]');

  modals.forEach((e) => {
    const modal = document.querySelector(e.dataset.modal);

    const openModal = () => {
      document.body.classList.add('overflow-y-hidden')
      modal.classList.remove('hidden')
    };
    const closeModal = () => {
      document.body.classList.remove('overflow-y-hidden')
      modal.classList.add('hidden')
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
      if ((modalBody && !modalBody.contains(e.target)) && !e.target.closest('[data-modal]')) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      e.key === 'Escape' && closeModal();
    });
  });
})();
