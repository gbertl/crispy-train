document
  .querySelectorAll('#personal-info-fields-identity-row-action')
  .forEach((element) => {
    element.addEventListener('click', () => {
      document.body.classList.add('overflow-y-hidden');
      document.querySelector('#goverment-id-modal').classList.remove('d-none');
    });
  });

document.querySelectorAll('#goverment-id-modal__close').forEach((element) => {
  element.addEventListener('click', () => {
    document.body.classList.remove('overflow-y-hidden');
    document.querySelector('#goverment-id-modal').classList.add('d-none');
  });
});
