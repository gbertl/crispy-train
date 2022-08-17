document
  .querySelectorAll('[data-application=true]')[1]
  .querySelector('#personal-info-fields-identity-row-action')
  .addEventListener('click', () => {
    document.querySelector('#goverment-id-modal').classList.remove('d-none');
  });

document
  .querySelector('#goverment-id-modal__close')
  .addEventListener('click', () => {
    document.querySelector('#goverment-id-modal').classList.add('d-none');
  });
