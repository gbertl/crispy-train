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

    const loginSignup = parent.querySelector('#login-signup');
    const formList = {
      'phone-form': {
        'confirm-number': parent.querySelector('#confirm-number'),
      },
      'email-form': {
        'email-login': parent.querySelector('#email-login'),
        'email-signup': parent.querySelector('#finish-signup')
      },
    };

    const formId = e.submitter.getAttribute('data-id')

    const targetForm = formList[formType][formId];

    loginSignup.classList.add('hidden');

    targetForm.classList.remove('hidden');

    targetForm
      .querySelector('[data-testid="panel-header-button"]')
      .addEventListener('click', (e) => {
        targetForm.classList.add('hidden');
        loginSignup.classList.remove('hidden');
      });

    targetForm
      .querySelectorAll('.more-options')
      .forEach((e) => {
        const moreOptions = parent.querySelector('#more-options')

        moreOptions.querySelector('[data-testid="panel-header-button"]')
          .addEventListener('click', (e) => {
            targetForm.classList.remove('hidden')
            moreOptions.classList.add('hidden')
          })

        e.addEventListener('click', (e) => {
          targetForm.classList.add('hidden')
          moreOptions.classList.remove('hidden')
        })
      })
  });
});

// (function getPage() {
//   const params = new URLSearchParams(window.location.search);

//   if (params.has('has_user_session')) {
//     return document.querySelectorAll('[data-application]').forEach((el) => {
//       if (!el.hasAttribute('data-user-session')) {
//         return el.remove();
//       }
//       el.classList.remove('hidden');
//     });
//   }

//   document.querySelector('[data-user-session]').remove();
// })();
