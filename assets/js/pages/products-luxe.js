if (document.querySelector('.modal-container-msg') != null) {
  const close = document.querySelector('.modal-container-msg');
  const modal = document.querySelector('.modal-msg');
  close.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-container-msg')) {
      modal.classList.replace('_244p2lw', '_dsadsad')
      document.querySelector('.msg-backdrop').classList.add('hidden')
      document.querySelector('.modal-container-msg').classList.add('hidden')
    }
  });
}

if (document.querySelector('#close-modal-msg') != null) {
  const close = document.querySelector('#close-modal-msg');
  const modal = document.querySelector('.modal-msg');
  close.addEventListener('click', () => {
    modal.classList.replace('_244p2lw', '_dsadsad')
    document.querySelector('.msg-backdrop').classList.add('hidden')
    document.querySelector('.modal-container-msg').classList.add('hidden')
  });
}

if (document.querySelector('#open-modal-msg') != null) {
  const close = document.querySelector('#open-modal-msg');
  const modal = document.querySelector('.modal-msg');
  close.addEventListener('click', () => {
    modal.classList.replace('_dsadsad', '_244p2lw')
    document.querySelector('.msg-backdrop').classList.remove('hidden')
    document.querySelector('.modal-container-msg').classList.remove('hidden')
  });
}