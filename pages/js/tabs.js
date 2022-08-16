const tabs = ({ buttonId, panelId, parentId }) => {
  document.querySelectorAll(`[id^='${buttonId}']`).forEach((el) => {
    el.addEventListener('click', (e) => {
      const parent = e.target.closest(`#${parentId}`);

      parent
        .querySelectorAll(`[id^='${buttonId}'][aria-selected=true]`)
        .forEach((el) => {
          el.setAttribute('aria-selected', false);
          el.classList.replace('_fd0fliz', '_tns11i');
        });

      e.target.setAttribute('aria-selected', true);
      e.target.classList.replace('_tns11i', '_fd0fliz');

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
