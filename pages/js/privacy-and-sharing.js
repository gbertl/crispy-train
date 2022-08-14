document
  .querySelectorAll("[id^='tab--account-settings-main-navigation-tabs--']")
  .forEach((el) => {
    el.addEventListener('click', (e) => {
      const parent = e.target.closest('#account-settings-main-navigation-tabs');

      parent
        .querySelectorAll(
          "[id^='tab--account-settings-main-navigation-tabs--'][aria-selected=true]"
        )
        .forEach((el) => {
          el.setAttribute('aria-selected', false);
          el.classList.replace('_fd0fliz', '_tns11i');
        });

      e.target.setAttribute('aria-selected', true);
      e.target.classList.replace('_tns11i', '_fd0fliz');

      // first set all to hidden then remove hidden on current tab
      parent
        .querySelectorAll(
          "[id^='panel--account-settings-main-navigation-tabs--']"
        )
        .forEach((el) => el.setAttribute('hidden', true));
      parent
        .querySelector(`#${e.target.getAttribute('aria-controls')}`)
        .removeAttribute('hidden');
    });
  });
