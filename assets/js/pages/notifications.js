document.querySelectorAll('button[role=tab]').forEach((el) => {
  el.addEventListener('click', function () {
    document
      .querySelectorAll('button[role=tab]')
      .forEach((el) => el.classList.replace('_10br0yfc', '_6tvt8jj'));
    this.classList.replace('_6tvt8jj', '_10br0yfc');

    document
      .querySelectorAll('div[role=tabpanel]')
      .forEach((el) => el.classList.add('d-none'));
    document
      .getElementById(this.getAttribute('aria-controls'))
      .classList.remove('d-none');
  });
});

document.querySelector('#filter-menu').addEventListener('click', function () {
  this.classList.toggle('_1arxx82');
  this.classList.toggle('_1ym0gspv');
  document.querySelector('#filter-menu-dropdown').classList.toggle('d-none');
});
