document
  .querySelectorAll("[id^='tab--notification-preferences--']")
  .forEach((el) => {
    el.addEventListener('click', (e) => {
      const parent = e.target.closest('#notification-preferences');

      parent
        .querySelectorAll(
          "[id^='tab--notification-preferences--'][aria-selected=true]"
        )
        .forEach((el) => {
          el.setAttribute('aria-selected', false);
          el.classList.replace('_fd0fliz', '_tns11i');
        });

      e.target.setAttribute('aria-selected', true);
      e.target.classList.replace('_tns11i', '_fd0fliz');

      // first set all to hidden then remove hidden on current tab
      parent
        .querySelectorAll("[id^='panel--notification-preferences--']")
        .forEach((el) => el.setAttribute('hidden', true));
      parent
        .querySelector(`#${e.target.getAttribute('aria-controls')}`)
        .removeAttribute('hidden');
    });
  });
