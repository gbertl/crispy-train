handleModal({
  btnOpenSelector: '#filter-btn',
  modalSelector: '#filter-modal',
  btnCloseSelector: '.btn-close',
});

document.querySelector('#anywhere-btn').addEventListener('click', () => {
  document.querySelector('.header__search-tabs-hide').classList.replace('header__search-tabs-hide', 'header__search-tabs-show');
  document.querySelector('.header__search-content').classList.replace('header__search-content', 'l1h6eamc');
  document.querySelector('.header__search-tabs-content-transition-hide').classList.replace('header__search-tabs-content-transition-hide', 'header__search-tabs-content-transition-show');
  document
    .querySelector('#search-tabpanel')
    .classList.replace('header__search-tabs-filter-hide', 'header__search-tabs-filter-show');
  document.querySelector('.header__search-tabs-filter-where-hide').classList.replace('header__search-tabs-filter-where-hide', 'header__search-tabs-filter-where-show');
  document.querySelector('.header__search-tabs-filter-searchBtn-hide').classList.replace('header__search-tabs-filter-searchBtn-hide', 'header__search-tabs-filter-searchBtn-show');
  document.querySelector('.header__search-tabs-filter-searchBtn-content').classList.add('hidden');
  document.querySelector('#search-btn-text').classList.remove('hidden');
  document.querySelector('#search-backdrop').classList.remove('hidden');
  document.querySelector('.header__search-tabs-filter-where-body').classList.add('header__search-tabs-filter-where-body-show');
});

document.querySelector('#anyweek-btn').addEventListener('click', () => {
  document.querySelector('.header__search-tabs-hide').classList.replace('header__search-tabs-hide', 'header__search-tabs-show');
  document.querySelector('.header__search-content').classList.replace('header__search-content', 'l1h6eamc');
  document.querySelector('.header__search-tabs-content-transition-hide').classList.replace('header__search-tabs-content-transition-hide', 'header__search-tabs-content-transition-show');
  document.querySelector('.header__search-tabs-filter-btn-container-inactive').classList.replace('header__search-tabs-filter-btn-container-inactive', 'header__search-tabs-filter-btn-container-active');
  document.querySelector('#search-backdrop').classList.remove('hidden');
  document.querySelector('#anyweek-panel').classList.remove('hidden');
  document
    .querySelector('#search-tabpanel')
    .classList.replace('header__search-tabs-filter-hide', 'header__search-tabs-filter-show');
  document.querySelector('#search-btn-text').classList.remove('hidden');
  document.querySelector('.header__search-tabs-filter-searchBtn-content').classList.add('hidden');
  document.querySelector('.header__search-tabs-filter-searchBtn-hide').classList.replace('header__search-tabs-filter-searchBtn-hide', 'header__search-tabs-filter-searchBtn-show');
});

document.querySelector('#addguests-btn').addEventListener('click', () => {
  document.querySelector('.header__search-tabs-hide').classList.replace('header__search-tabs-hide', 'header__search-tabs-show');
  document.querySelector('.header__search-content').classList.replace('header__search-content', 'l1h6eamc');
  document.querySelector('.header__search-tabs-content-transition-hide').classList.replace('header__search-tabs-content-transition-hide', 'header__search-tabs-content-transition-show');
  document
    .querySelector('#search-tabpanel')
    .classList.replace('header__search-tabs-filter-hide', 'header__search-tabs-filter-show');
  document.querySelector('#search-backdrop').classList.remove('hidden');
  document.querySelector('#search-btn-text').classList.remove('hidden');
  document.querySelector('.header__search-tabs-filter-searchBtn-content').classList.add('hidden');
  document.querySelector('.header__search-tabs-filter-searchBtn-hide').classList.replace('header__search-tabs-filter-searchBtn-hide', 'header__search-tabs-filter-searchBtn-show');
  document
    .querySelector('[data-testid=structured-search-input-field-guests-button]')
    .classList.replace('header__search-tabs-filter-btn-container-inactive', 'header__search-tabs-filter-btn-container-active');
  document.querySelector('#search-who').classList.remove('hidden');
});

handleModal({
  btnOpenSelector: '._njezmzv',
  modalSelector: '#filter-modal',
  btnCloseSelector: '.btn-close',
});
