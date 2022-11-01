const toggleOptions = () => {
  const options = document.querySelector(
    '#dropdown-selector-payment_option_selector-options'
  );

  options.classList.toggle('pointer-events-none');

  if (options.style.opacity === '0') {
    options.style.opacity = 1;
    options.style.top = '4px';

    document
      .querySelectorAll('.payment-option__selection-wrapper-icon')
      .forEach((el) => (el.style.transform = 'rotate(180deg)'));
  } else {
    options.style.opacity = 0;
    options.style.top = '-16px';

    document
      .querySelectorAll('.payment-option__selection-wrapper-icon')
      .forEach((el) => (el.style.transform = 'rotate(0deg)'));
  }
};

document
  .querySelector('#dropdown-selector-payment_option_selector-button')
  .addEventListener('click', toggleOptions);

document
  .querySelectorAll('[id*=dropdown-selector-payment_option_selector-option-]')
  .forEach((el) =>
    el.addEventListener('mouseenter', (el) =>
      el.currentTarget.classList.replace('_1wcpnjd', '_16kbejea')
    )
  );

document
  .querySelectorAll('[id*=dropdown-selector-payment_option_selector-option-]')
  .forEach((el) =>
    el.addEventListener('mouseleave', (el) =>
      el.currentTarget.classList.replace('_16kbejea', '_1wcpnjd')
    )
  );

document.querySelectorAll('._1gyjybc > li').forEach((el) => {
  el.addEventListener('click', (el) => {
    const icon = el.currentTarget.querySelector('svg').cloneNode(true);
    const text = el.currentTarget
      .querySelector('._10ejfg4u span')
      .cloneNode(true);

    const select = document.querySelector(
      '#dropdown-selector-payment_option_selector-input'
    );

    select.querySelector('svg').replaceWith(icon);
    select.querySelector('span').replaceWith(text);

    toggleOptions();

    if (text.innerText.includes('Credit')) {
      document.querySelector('._4l12l8').classList.remove('hidden');
    } else {
      document.querySelector('._4l12l8').classList.add('hidden');
    }

    const activeOption = document.querySelector(
      '._1gyjybc li[aria-selected=true]'
    );
    activeOption.setAttribute('aria-selected', 'false');
    activeOption
      .querySelector('._1s9o8so5')
      .classList.replace('_1s9o8so5', '_6h56b0p');

    el.currentTarget.setAttribute('aria-selected', 'true');
    el.currentTarget
      .querySelector('._6h56b0p')
      .classList.replace('_6h56b0p', '_1s9o8so5');
  });
});
  });
});
