document
  .querySelector('.js-header__searchButton')
  .addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('.header__searchInput').style = '';
    document.querySelector('.js-header__closeSearchButton').style = '';
    document.querySelector('.header__searchInput').focus();
    document.getElementById('searchform').classList.add('header--searchOpen');
    setTimeout(() => {
      document.getElementById('searchform').classList.add('header--animated');
    }, 250);
  });

document
  .querySelector('.js-header__closeSearchButton')
  .addEventListener('click', () => {
    document.querySelector('.header__searchInput').style.display = 'none';
    document.querySelector('.js-header__closeSearchButton').style.display =
      'none';
    document.getElementById('searchform').classList.remove('header--animated');
    setTimeout(() => {
      document
        .getElementById('searchform')
        .classList.remove('header--searchOpen');
    }, 250);
  });
