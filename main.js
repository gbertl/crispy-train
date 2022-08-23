document.querySelector('.input-search').addEventListener('keyup', (e) => {
  const value = e.target.value;

  document.querySelectorAll('a').forEach((el) => {
    if (!el.textContent.includes(value)) {
      el.classList.add('d-none');
    } else {
      el.classList.remove('d-none');
    }
  });

  document.querySelectorAll('ul').forEach((el) => {
    if (
      el.querySelectorAll('a.d-none').length === el.querySelectorAll('a').length
    ) {
      el.closest('div').classList.add('d-none');
    } else {
      el.closest('div').classList.remove('d-none');
    }
  });
});

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop) {
    document
      .querySelector('.input-search')
      .classList.add('input-search--scrolled');
  } else {
    document
      .querySelector('.input-search')
      .classList.remove('input-search--scrolled');
  }
});
