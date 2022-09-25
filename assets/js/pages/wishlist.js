document
  .querySelector('#pin-location')
  .addEventListener('click', (e) => {
    e.preventDefault();
    if(document.querySelector('#pin-search').classList.contains('cezhrh0')){
      document.querySelector('#pin-search').classList.remove('cezhrh0')
      document.querySelector('#pin-search').classList.add('cv25bqx')
    } else {
      document.querySelector('#pin-search').classList.remove('cv25bqx')
      document.querySelector('#pin-search').classList.add('cezhrh0')
    }
  });

document
  .querySelector('#cancel-pin')
  .addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#pin-search').classList.remove('cezhrh0')
    document.querySelector('#pin-search').classList.add('cv25bqx')
  });

  