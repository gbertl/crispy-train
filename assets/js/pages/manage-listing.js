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

function dotsPhotos(el) {
    if(document.querySelectorAll(el).length != 0){
        const trigger = document.querySelectorAll(el);
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

dotsPhotos('.btn-dots');
dotsPhotos('._1d3iagv');

if(document.querySelector('._vxvq8x') != null){
    const close = document.querySelector('._vxvq8x');
    const modal = document.querySelector('.modal-caption');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('_vxvq8x')){
            modal.classList.replace('_1nvgts7s', '_dsadsad')
            setTimeout(() => {
                document.querySelector('._vxvq8x').classList.add('hidden') 
            }, 500);
            document.querySelector('._1t0jy5tw').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-caption') != null){
    const close = document.querySelector('#close-modal-caption');
    const modal = document.querySelector('.modal-caption');
    close.addEventListener('click', () => {
        console.log(modal);
        modal.classList.replace('_1nvgts7s', '_dsadsad')
        setTimeout(() => {
            document.querySelector('._vxvq8x').classList.add('hidden') 
        }, 500);
        document.querySelector('._1t0jy5tw').classList.add('hidden')
    });
}

function captionPhotos() {
    if(document.querySelectorAll('._9d4he4').length != 0){
        const trigger = document.querySelectorAll('._9d4he4');
        trigger.forEach(element => {
            element.addEventListener('click', (e) => {
                const modal = document.querySelector('.modal-caption');
                modal.classList.replace('_dsadsad', '_1nvgts7s')
                document.querySelector('._vxvq8x').classList.remove('hidden') 
                document.querySelector('._1t0jy5tw').classList.remove('hidden')
            });
        });
    }
}

captionPhotos();

if(document.querySelector('.modal-container-add-photo') != null){
    const close = document.querySelector('.modal-container-add-photo');
    const modal = document.querySelector('.modal-add-photo');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-add-photo')){
            modal.classList.replace('_244p2lw', '_dsadsad')
        document.querySelector('.modal-container-add-photo').classList.add('hidden') 
        document.querySelector('.add-photo-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-add-photo') != null){
    const close = document.querySelector('#close-modal-add-photo');
    const modal = document.querySelector('.modal-add-photo');
    close.addEventListener('click', () => {
        console.log(modal);
        modal.classList.replace('_244p2lw', '_dsadsad')
        document.querySelector('.modal-container-add-photo').classList.add('hidden') 
        document.querySelector('.add-photo-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-add-photo') != null){
    const close = document.querySelector('#open-modal-add-photo');
    const modal = document.querySelector('.modal-add-photo');
    close.addEventListener('click', () => {
        console.log(modal);
        modal.classList.replace('_dsadsad', '_244p2lw')
        document.querySelector('.modal-container-add-photo').classList.remove('hidden') 
        document.querySelector('.add-photo-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('.modal-container-manage') != null){
    const close = document.querySelector('.modal-container-manage');
    const modal = document.querySelector('.modal-manage');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-manage')){
            modal.classList.replace('_244p2lw', '_dsadsad')
        document.querySelector('.modal-container-manage').classList.add('hidden') 
        document.querySelector('.manage-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-manage') != null){
    const close = document.querySelector('#close-modal-manage');
    const modal = document.querySelector('.modal-manage');
    close.addEventListener('click', () => {
        console.log(modal);
        modal.classList.replace('_244p2lw', '_dsadsad')
        document.querySelector('.modal-container-manage').classList.add('hidden') 
        document.querySelector('.manage-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-manage') != null){
    const close = document.querySelector('#open-modal-manage');
    const modal = document.querySelector('.modal-manage');
    close.addEventListener('click', () => {
        console.log(modal);
        modal.classList.replace('_dsadsad', '_244p2lw')
        document.querySelector('.modal-container-manage').classList.remove('hidden') 
        document.querySelector('.manage-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('.modal-container-example') != null){
    const close = document.querySelector('.modal-container-example');
    const modal = document.querySelector('.modal-example');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-example')){
            modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-example').classList.add('hidden') 
        document.querySelector('.example-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-example') != null){
    const close = document.querySelector('#close-modal-example');
    const modal = document.querySelector('.modal-example');
    close.addEventListener('click', () => {
        console.log(modal);
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-example').classList.add('hidden') 
        document.querySelector('.example-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-example') != null){
    const close = document.querySelector('#open-modal-example');
    const modal = document.querySelector('.modal-example');
    close.addEventListener('click', () => {
        console.log(modal);
        modal.classList.replace('_dsadsad', '_mvip18q')
        document.querySelector('.modal-container-example').classList.remove('hidden') 
        document.querySelector('.example-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('#open-modal-example-m') != null){
    const close = document.querySelector('#open-modal-example-m');
    const modal = document.querySelector('.modal-example');
    close.addEventListener('click', () => {
        console.log(modal);
        modal.classList.replace('_dsadsad', '_mvip18q')
        document.querySelector('.modal-container-example').classList.remove('hidden') 
        document.querySelector('.example-backdrop').classList.remove('hidden')
    });
}