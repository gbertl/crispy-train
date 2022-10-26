document.querySelector('._1b0ewa0u').addEventListener('focus', (e) => {
  const parent = e.currentTarget.closest('.p1uyj2jw');

  parent.classList.add('t1extv73');

  parent
    .querySelector('.biod118')
    .querySelectorAll('.dir.dir-ltr.hidden')
    .forEach((el) => el.classList.remove('hidden'));

  e.currentTarget.closest('.hu3ahp1').classList.add('hidden');

  e.currentTarget
    .closest('.contents')
    .querySelector('._1wn6bem[aria-label=Back]')
    .classList.remove('hidden');
  e.currentTarget
    .closest('.contents')
    .querySelector('._1wn6bem[aria-label=Close]')
    .classList.add('hidden');
});

document
  .querySelector('._1wn6bem[aria-label=Back]')
  .addEventListener('click', (e) => {
    const parent = e.currentTarget.closest('.contents');

    parent.querySelector('.p1uyj2jw').classList.remove('t1extv73');

    console.log(parent.querySelectorAll('.biod118 > div.dir.dir-ltr'));

    parent.querySelectorAll('.biod118 > div.dir.dir-ltr').forEach((el) => {
      el.classList.add('hidden');
    });

    parent.querySelector('.biod118 > .hu3ahp1').classList.remove('hidden');

    e.currentTarget.classList.add('hidden');
    e.currentTarget
      .closest('.contents')
      .querySelector('._1wn6bem[aria-label=Close]')
      .classList.remove('hidden');
  });
