if(document.querySelector('#close-modal-welcome') != null){
    const close = document.querySelector('#close-modal-welcome');
    const modal = document.querySelector('.modal-welcome');
    close.addEventListener('click', () => {
        modal.classList.replace('_wheg71v', '_dsadsad')
        document.querySelector('._virdaj').classList.add('hidden')
        document.querySelector('._1t0jy5tw').classList.add('hidden')
    });
}

if(document.querySelector('._virdaj') != null){
    const close = document.querySelector('._virdaj');
    const modal = document.querySelector('.modal-welcome');
    close.addEventListener('click', () => {
        modal.classList.replace('_wheg71v', '_dsadsad')
        document.querySelector('._virdaj').classList.add('hidden')
        document.querySelector('._1t0jy5tw').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-welcome') != null){
    const close = document.querySelector('#open-modal-welcome');
    const modal = document.querySelector('.modal-welcome');
    close.addEventListener('click', () => {
        modal.classList.replace('_dsadsad', '_wheg71v')
        document.querySelector('._virdaj').classList.remove('hidden')
        document.querySelector('._1t0jy5tw').classList.remove('hidden')
    });
}