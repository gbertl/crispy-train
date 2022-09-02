document.querySelectorAll('.continue-btn-email').forEach((el) => {
  el.addEventListener('click', (e) => {
    const parent = e.target.closest('[data-application=true]');
    parent.querySelector('.email-form').classList.remove('hidden');
    parent.querySelector('.phone-form').classList.add('hidden');
    parent.querySelector('.continue-btn-phone').classList.remove('hidden');
    parent.querySelector('.continue-btn-email').classList.add('hidden');
  });
});

document.querySelectorAll('.continue-btn-phone').forEach((el) => {
  el.addEventListener('click', (e) => {
    const parent = e.target.closest('[data-application=true]');
    parent.querySelector('.phone-form').classList.remove('hidden');
    parent.querySelector('.email-form').classList.add('hidden');
    parent.querySelector('.continue-btn-email').classList.remove('hidden');
    parent.querySelector('.continue-btn-phone').classList.add('hidden');
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

    loginSignup.classList.add('hidden');

    targetForm.classList.remove('hidden');

    targetForm
      .querySelector('[data-testid="panel-header-button"]')
      .addEventListener('click', (e) => {
        targetForm.classList.add('hidden');
        loginSignup.classList.remove('hidden');
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
      el.classList.remove('hidden');
    });
  }

  document.querySelector('[data-user-session]').remove();
})();
