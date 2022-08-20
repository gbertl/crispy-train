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

document.querySelectorAll('form').forEach((form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formType = e.target.classList[0];

    const parent = e.target.closest('[data-application=true]');

    const loginSignup = parent.querySelector('[data-login-signup]');
    const formList = {
      'phone-form': parent.querySelector('[data-confirm-number]'),
      'email-form': parent.querySelector('[data-finish-signup]'),
    };

    const targetForm = formList[formType];

    loginSignup.classList.add('d-none');

    targetForm.classList.remove('d-none');

    targetForm
      .querySelector('[data-testid="panel-header-button"]')
      .addEventListener('click', (e) => {
        targetForm.classList.add('d-none');
        loginSignup.classList.remove('d-none');
      });
  });
});

(function getPage() {
  const params = new URLSearchParams(window.location.search);

  if (params.has('has_user_session')) {
    return document.querySelectorAll('[data-application]').forEach((el) => {
      if (!el.hasAttribute('data-user-session')) {
        return el.remove();
      }
      el.classList.remove('d-none');
    });
  }

  document.querySelector('[data-user-session]').remove();
})();
