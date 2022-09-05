document.querySelectorAll('button[role=tab]').forEach((el) => {
  el.addEventListener('click', function () {
    document
      .querySelectorAll('button[role=tab]')
      .forEach((el) => el.classList.replace('inbox-container__tab-notification', 'inbox-container__tab-btn'));
    this.classList.replace('inbox-container__tab-btn', 'inbox-container__tab-notification');

    document
      .querySelectorAll('div[role=tabpanel]')
      .forEach((el) => el.classList.add('hidden'));
    document
      .getElementById(this.getAttribute('aria-controls'))
      .classList.remove('hidden');
  });
});

document.querySelector('#filter-menu').addEventListener('click', function () {
  this.classList.toggle('inbox-container__inbox-btn-filter');
  this.classList.toggle('inbox-container__filter-menu-btn');
  document.querySelector('#filter-menu-dropdown').classList.toggle('hidden');
});
