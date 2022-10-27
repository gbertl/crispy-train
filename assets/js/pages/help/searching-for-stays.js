window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 300) {
    document.querySelector('#back-to-top').classList.remove('hidden');
  } else {
    document.querySelector('#back-to-top').classList.add('hidden');
  }
});
