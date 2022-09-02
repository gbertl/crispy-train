// modal tab (Pending, Available)
document
  .querySelector('[role=tablist]')
  .querySelectorAll('button')
  .forEach((el) => {
    el.addEventListener('click', (e) => {
      document
        .querySelector('[role=tablist]')
        .querySelectorAll('button')
        .forEach((el) => {
          el.setAttribute('aria-selected', false);
          el.classList.replace('_1yrhm7tp', '_6v5uk23');
        });
      e.target.setAttribute('aria-selected', true);
      e.target.classList.replace('_6v5uk23', '_1yrhm7tp');

      if (e.target.innerHTML.replace(/\s/g, '') === 'Available') {
        document.querySelector('#available-panel').classList.remove('hidden');
      } else {
        document.querySelector('#available-panel').classList.add('hidden');
      }
    });
  });

// open modal btn
document
  .querySelector('#show-more-details-button')
  .addEventListener('click', () => {
    document.querySelector('#show-details-modal').classList.remove('hidden');
  });

// close modal btn
document
  .querySelector('#show-details-modal__close')
  .addEventListener('click', () => {
    document.querySelector('#show-details-modal').classList.add('hidden');
  });

// accordion
document.querySelectorAll('._psavrr').forEach((el) => {
  el.addEventListener('click', function () {
    this.querySelector('svg').classList.toggle('flip-vertical');
    if (this.closest('._4q962a').querySelector('._5ktaok')) {
      this.closest('._4q962a')
        .querySelector('._5ktaok')
        .classList.replace('_5ktaok', 'hidden');
    } else {
      this.closest('._4q962a')
        .querySelector('.hidden')
        .classList.replace('hidden', '_5ktaok');
    }
  });
});
