document.querySelectorAll('[role=tab]').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // please add this role attribute to the parent to make handler work
    const parent = e.target.closest('[role=tablistcontainer]');
    parent
      .querySelectorAll('[role=tab]')
      .forEach((tabBtn) =>
        tabBtn.classList.replace(
          'tab__list-btn-primary',
          'tab__list-btn-secondary'
        )
      );
    e.target.classList.replace(
      'tab__list-btn-secondary',
      'tab__list-btn-primary'
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

// modal alternative
(() => {
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

  document.querySelectorAll('[data-scroll]').forEach((e) => {
    const view = document.querySelector(e.dataset.scroll);
    e.addEventListener('click', () =>
      view?.scrollIntoView({ behavior: 'smooth' })
    );
  });
})();
