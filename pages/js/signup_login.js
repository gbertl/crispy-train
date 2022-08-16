document.querySelectorAll('.continue-btn-email').forEach((el) => {
  el.addEventListener('click', (e) => {
    const parent = e.target.closest('[data-application=true]');
    parent.querySelector('.email-form').classList.remove('d-none');
    parent.querySelector('.phone-form').classList.add('d-none');
    parent.querySelector('.continue-btn-phone').classList.remove('d-none');
    parent.querySelector('.continue-btn-email').classList.add('d-none');
  });
});

document.querySelectorAll('.continue-btn-phone').forEach((el) => {
  el.addEventListener('click', (e) => {
    const parent = e.target.closest('[data-application=true]');
    parent.querySelector('.phone-form').classList.remove('d-none');
    parent.querySelector('.email-form').classList.add('d-none');
    parent.querySelector('.continue-btn-email').classList.remove('d-none');
    parent.querySelector('.continue-btn-phone').classList.add('d-none');
  });
});
