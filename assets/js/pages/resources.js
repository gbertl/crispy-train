document
  .querySelector('#resources-menu-btn')
  .addEventListener('click', function () {
    if (document.querySelector('._1htw6hi')) {
      document
        .querySelector('._1htw6hi')
        .classList.replace('_1htw6hi', '_baxri3m');
    } else {
      document
        .querySelector('._baxri3m')
        .classList.replace('_baxri3m', '_1htw6hi');
    }
    document.querySelector('._j1kt73').classList.toggle('hidden');
    document
      .querySelector('#resources-header-close')
      .classList.toggle('hidden');
    document.querySelector('#site-content').classList.toggle('hidden');
    document.querySelector('.footer__content-info').classList.toggle('hidden');
    document.querySelector('.search-bar-xs').classList.toggle('hidden');
    document.querySelector('#language-and-currency').classList.toggle('hidden');
    document.querySelector('#logout-btn').classList.toggle('hidden');
    document.querySelector('#resources-menu').classList.toggle('hidden');
    document.querySelector('._1fls13n').classList.toggle('hidden');

    if (this.classList.contains('_1ju7xj0j')) {
      this.classList.replace('_1ju7xj0j', '_1qi0sj8');
    } else {
      this.classList.replace('_1qi0sj8', '_1ju7xj0j');
    }
  });

  document
  .querySelector('.topic-dropdown')
  .addEventListener('click', function () {
    const dropdown = document.querySelector('._nu40w4').classList;
    if(dropdown.contains('hidden')){
      dropdown.remove('hidden')
    } else {
      dropdown.add('hidden')
    }
  });


  document
  .querySelector('#content-type-btn')
  .addEventListener('click', function () {
    document.querySelector('#content-type-modal').classList.toggle('hidden');
  });

  document
  .querySelector('[data-testid="modal-container"]')
  .addEventListener('click', function (e) {
    if(e.target.attributes[1].value == 'modal-container'){
      e.stopPropagation()
      e.preventDefault()
      document.querySelector('#content-type-modal').classList.toggle('hidden'); 
    }
  });
  
  