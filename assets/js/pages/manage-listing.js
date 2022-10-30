if(document.querySelector('#side-nav-toggle') != null){
    const trigger = document.querySelector('#side-nav-toggle');
    const sidebar = document.querySelector('.app-theme__wrapper');
    const body = document.querySelector('.site-content__page-wrapper');
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(sidebar.classList.contains('show') && body.classList.contains('show')){
            sidebar.classList.remove('show');
            body.classList.remove('show');
        }else {
            sidebar.classList.add('show');
            body.classList.add('show');
        }
    });
}

if(document.querySelector('.site-content__page-container') != null){
    const trigger = document.querySelector('.site-content__page-container');
    const sidebar = document.querySelector('.app-theme__wrapper');
    const body = document.querySelector('.site-content__page-wrapper');
    trigger.addEventListener('click', (e) => {
        
        if(e.target.id !== 'side-nav-toggle' || e.target.id !== 'side-nav-toggle-span' || e.target.id !== 'side-nav-toggle-svg' || e.target.id !== 'side-nav-toggle-path'){
            if(sidebar.classList.contains('show') && body.classList.contains('show')){
                sidebar.classList.remove('show');
                body.classList.remove('show');
            }
        }
    });
}

function close() {
    if(document.querySelectorAll('button[data-testid="delete-input-button"].btn-close').length != 0){
        const trigger = document.querySelectorAll('button[data-testid="delete-input-button"].btn-close');
        trigger.forEach(element => {
            element.addEventListener('click', (e) => {
                element.parentNode.parentNode.parentNode.remove()
            });
        });
    }
}

close();

if(document.querySelector('button[data-testid="add-packing-list-item-link"].btn-link-condensed') != null){
    const trigger = document.querySelector('button[data-testid="add-packing-list-item-link"].btn-link-condensed');
    trigger.addEventListener('click', (e) => {
        // const parentM = document.querySelector('.parent-guest-m')
        const parent = document.querySelector('.parent-guest')
        const el = document.querySelector('.input-el')
        const clone = el.children[0].cloneNode(true)
        parent.appendChild(clone)
        close();
    });
}

if(document.querySelector('button[data-testid="add-packing-list-item-link-m"].btn-link-condensed') != null){
    const trigger = document.querySelector('button[data-testid="add-packing-list-item-link-m"].btn-link-condensed');
    trigger.addEventListener('click', (e) => {
        // const parentM = document.querySelector('.parent-guest-m')
        const parent = document.querySelector('.parent-guest-m')
        const el = document.querySelector('.input-el')
        const clone = el.children[0].cloneNode(true)
        parent.appendChild(clone)
        close();
    });
}

function checkbox() {
    if(document.querySelectorAll('.explore-filter-menu__list-content').length != 0){
        const trigger = document.querySelectorAll('.explore-filter-menu__list-content');
        trigger.forEach(element => {
            element.addEventListener('click', (e) => {
                if(element.children[1].classList.contains('explore-filter-menu__list-checkbox')){
                    element.children[1].classList.remove('explore-filter-menu__list-checkbox')
                    element.children[1].classList.add('_1v5cvwv4')
                } else {
                    element.children[1].classList.add('explore-filter-menu__list-checkbox')
                    element.children[1].classList.remove('_1v5cvwv4')
                }
            });
        });
    }
}

checkbox();

function dotsPhotos() {
    if(document.querySelectorAll('.btn-dots').length != 0){
        const trigger = document.querySelectorAll('.btn-dots');
        trigger.forEach(element => {
            element.addEventListener('click', (e) => {
                if(element.parentNode.parentNode.children[1].classList.contains('hidden')){
                    element.parentNode.parentNode.children[1].classList.remove('hidden')
                } else {
                    element.parentNode.parentNode.children[1].classList.add('hidden')
                }
            });
        });
    }
}

dotsPhotos();