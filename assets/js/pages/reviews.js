let counter = 0;

// next button: show next section and hides current
document.querySelector('.btn-dark').addEventListener('click', (e) => {
  e.preventDefault();
  document
    .querySelectorAll('#site-content > section')
    [counter].classList.add('hidden');
  document
    .querySelectorAll('#site-content > section')
    [counter + 1].classList.remove('hidden');

  // update scale in progressbar
  if (counter === 0) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.333333)';
  } else if (counter === 1) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.5)';
  } else if (counter === 2) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.666667)';
  } else if (counter === 3) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.833333)';
  }

  // show back button
  document.querySelector('._13ea8wp').classList.remove('hidden');

  if (counter === 3) {
    document.querySelector('.box-border').innerText = 'Finish';
  }

  counter++;
});

// back button
document.querySelector('._13ea8wp').addEventListener('click', (e) => {
  e.preventDefault();
  document
    .querySelectorAll('#site-content > section')
    [counter].classList.add('hidden');
  document
    .querySelectorAll('#site-content > section')
    [counter - 1].classList.remove('hidden');

  // update scale in progressbar
  if (counter === 1) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.166667)';
  } else if (counter === 2) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.333333)';
  } else if (counter === 3) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.5)';
  } else if (counter === 4) {
    document.querySelector('._1rcz3vn').style.transform = 'scaleX(0.666667)';
  }

  if (counter === 4) {
    document.querySelector('.box-border').innerText = 'Next';
  }

  counter--;

  if (counter === 0) {
    document.querySelector('._13ea8wp').classList.add('hidden');
  }
});
