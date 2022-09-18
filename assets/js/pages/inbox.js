// open modal btn
document
  .querySelector('#host-inbox-filter-button')
  .addEventListener('click', () => {
    document.querySelector('#show-filter-modal').classList.remove('hidden');
  });

// close modal btn
document
  .querySelector('#show-filter-modal__close')
  .addEventListener('click', () => {
    document.querySelector('#show-filter-modal').classList.add('hidden');
  });