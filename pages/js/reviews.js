let counter = 0;

// next button: show next section and hides current
document.querySelector('._1ku51f04').addEventListener('click', (e) => {
  e.preventDefault();
  document
    .querySelectorAll('#site-content > section')
    [counter].classList.add('d-none');
  document
    .querySelectorAll('#site-content > section')
    [counter + 1].classList.remove('d-none');

  // update scale in progressbar
  if (counter === 0) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.333333)';
  } else if (counter === 1) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.5)';
  }

  // show back button
  document.querySelector('._13ea8wp').classList.remove('d-none');

  counter++;
});

document.querySelector('._13ea8wp').addEventListener('click', (e) => {
  e.preventDefault();
  document
    .querySelectorAll('#site-content > section')
    [counter].classList.add('d-none');
  document
    .querySelectorAll('#site-content > section')
    [counter - 1].classList.remove('d-none');

  // update scale in progressbar
  if (counter === 1) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.166667)';
  } else if (counter === 2) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.333333)';
  }

  counter--;
  if (counter === 0) {
    document.querySelector('._13ea8wp').classList.add('d-none');
  }
});
