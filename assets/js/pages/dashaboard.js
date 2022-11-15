if(document.querySelector('.modal__container') != null){
    const close = document.querySelector('.modal__container');
    const modal = document.querySelector('.modal-show-all');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal__container')){
            modal.classList.replace('_1ucy1zjv', '_mvip18q')
            document.querySelector('.modal__container').classList.add('hidden') 
            document.querySelector('._1t0jy5tw').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-show-all') != null){
    const close = document.querySelector('#close-modal-show-all');
    const modal = document.querySelector('.modal-show-all');
    close.addEventListener('click', () => {
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal__container').classList.add('hidden') 
        document.querySelector('._1t0jy5tw').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-show-all') != null){
    const close = document.querySelector('#open-modal-show-all');
    const modal = document.querySelector('.modal-show-all');
    close.addEventListener('click', () => {
        modal.classList.replace('_mvip18q', '_1ucy1zjv')
        document.querySelector('.modal__container').classList.remove('hidden') 
        document.querySelector('._1t0jy5tw').classList.remove('hidden')
    });
}

document.querySelectorAll('.main-content__header-action-dot').forEach(element => {
    element.addEventListener('click', () => {
        if(element.parentNode.parentNode.children[1].classList.contains('hidden')){
            element.parentNode.parentNode.children[1].classList.remove('hidden')
        } else {
            element.parentNode.parentNode.children[1].classList.add('hidden')
        }
    });
});