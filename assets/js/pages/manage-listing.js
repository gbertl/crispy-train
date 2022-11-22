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
                if(element.children[1].classList.contains('form__check-icon-wrapper')){
                    element.children[1].classList.remove('form__check-icon-wrapper')
                    element.children[1].classList.add('form__check-icon-wrapper--active')
                } else {
                    element.children[1].classList.add('form__check-icon-wrapper')
                    element.children[1].classList.remove('form__check-icon-wrapper--active')
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

if(document.querySelector('.modal__container') != null){
    const close = document.querySelector('.modal__container');
    const modal = document.querySelector('.modal-caption');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal__container')){
            modal.classList.replace('_1nvgts7s', '_dsadsad')
            setTimeout(() => {
                document.querySelector('.modal__container').classList.add('hidden') 
            }, 500);
            document.querySelector('._1t0jy5tw').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-caption') != null){
    const close = document.querySelector('#close-modal-caption');
    const modal = document.querySelector('.modal-caption');
    close.addEventListener('click', () => {
        modal.classList.replace('_1nvgts7s', '_dsadsad')
        setTimeout(() => {
            document.querySelector('.modal__container').classList.add('hidden') 
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
                document.querySelector('.modal__container').classList.remove('hidden') 
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
        modal.classList.replace('_244p2lw', '_dsadsad')
        document.querySelector('.modal-container-add-photo').classList.add('hidden') 
        document.querySelector('.add-photo-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-add-photo') != null){
    const close = document.querySelector('#open-modal-add-photo');
    const modal = document.querySelector('.modal-add-photo');
    close.addEventListener('click', () => {
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
        modal.classList.replace('_244p2lw', '_dsadsad')
        document.querySelector('.modal-container-manage').classList.add('hidden') 
        document.querySelector('.manage-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-manage') != null){
    const close = document.querySelector('#open-modal-manage');
    const modal = document.querySelector('.modal-manage');
    close.addEventListener('click', () => {
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
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-example').classList.add('hidden') 
        document.querySelector('.example-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-example') != null){
    const close = document.querySelector('#open-modal-example');
    const modal = document.querySelector('.modal-example');
    close.addEventListener('click', () => {
        modal.classList.replace('_dsadsad', '_mvip18q')
        document.querySelector('.modal-container-example').classList.remove('hidden') 
        document.querySelector('.example-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('#open-modal-example-m') != null){
    const close = document.querySelector('#open-modal-example-m');
    const modal = document.querySelector('.modal-example');
    close.addEventListener('click', () => {
        modal.classList.replace('_dsadsad', '_mvip18q')
        document.querySelector('.modal-container-example').classList.remove('hidden') 
        document.querySelector('.example-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('.modal-container-options') != null){
    const close = document.querySelector('.modal-container-options');
    const modal = document.querySelector('.modal-options');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-options')){
            modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-options').classList.add('hidden') 
        document.querySelector('.options-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-options') != null){
    const close = document.querySelector('#close-modal-options');
    const modal = document.querySelector('.modal-options');
    close.addEventListener('click', () => {
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-options').classList.add('hidden') 
        document.querySelector('.options-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-options') != null){
    const close = document.querySelector('#open-modal-options');
    const modal = document.querySelector('.modal-options');
    close.addEventListener('click', () => {
        modal.classList.replace('_dsadsad', '_mvip18q')
        document.querySelector('.modal-container-options').classList.remove('hidden') 
        document.querySelector('.options-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('#open-modal-options-m') != null){
    const close = document.querySelector('#open-modal-options');
    const modal = document.querySelector('.modal-options');
    close.addEventListener('click', () => {
        modal.classList.replace('_dsadsad', '_mvip18q')
        document.querySelector('.modal-container-options').classList.remove('hidden') 
        document.querySelector('.options-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('.modal-container-examples') != null){
    const close = document.querySelector('.modal-container-examples');
    const modal = document.querySelector('.modal-examples');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-examples')){
            modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-examples').classList.add('hidden') 
        document.querySelector('.examples-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-examples') != null){
    const close = document.querySelector('#close-modal-examples');
    const modal = document.querySelector('.modal-examples');
    close.addEventListener('click', () => {
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-examples').classList.add('hidden') 
        document.querySelector('.examples-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-examples') != null){
    const close = document.querySelector('#open-modal-examples');
    const modal = document.querySelector('.modal-examples');
    close.addEventListener('click', () => {
        modal.classList.replace('_dsadsad', '_mvip18q')
        document.querySelector('.modal-container-examples').classList.remove('hidden') 
        document.querySelector('.examples-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('#open-modal-examples-m') != null){
    const close = document.querySelector('#open-modal-examples');
    const modal = document.querySelector('.modal-examples');
    close.addEventListener('click', () => {
        modal.classList.replace('_dsadsad', '_mvip18q')
        document.querySelector('.modal-container-examples').classList.remove('hidden') 
        document.querySelector('.examples-backdrop').classList.remove('hidden')
    });
}

function switchToogleBtn(callbackActive, callbackInactive) {
    console.log('init');
    if(document.querySelectorAll('.switch-toogle-btn') != null){
        const trigger = document.querySelectorAll('.switch-toogle-btn');
        trigger.forEach(element => {
            element.addEventListener('click', () => {
                if(element.classList.contains('switch-toogle-inactive')){
                    element.classList.remove('switch-toogle-inactive')
                    element.classList.add('switch-toogle-active')
                    element.children[0].classList.remove('form__switch-toggle')
                    element.children[0].classList.add('form__switch-toggle-checked')
                    element.children[0].children[0].classList.remove('hidden')
                    if(callbackActive){
                        callbackActive()
                    }
                }else{
                    element.classList.remove('switch-toogle-active')
                    element.classList.add('switch-toogle-inactive')
                    element.children[0].classList.remove('form__switch-toggle-checked')
                    element.children[0].classList.add('form__switch-toggle')
                    element.children[0].children[0].classList.add('hidden')
                    if(callbackInactive){
                        callbackInactive()
                    }
                }
            });
        });
    }
}


if(document.querySelector('#add-group-rate') != null){
    const trigger = document.querySelector('#add-group-rate');
    const fields = document.querySelector('.group-input-fields');
    const labels = document.querySelector('.group-labels');
    const hr = document.querySelector('.group-hr');    
    const add = document.querySelector('.group-add-btn');    
    const banner = document.querySelector('.group-banner-btn');    
    
    trigger.addEventListener('click', () => {
        fields.classList.remove('hidden') 
        labels.classList.remove('hidden') 
        hr.classList.remove('hidden') 
        add.classList.add('hidden') 
        banner.classList.add('hidden') 
    });
}

if(document.querySelector('.remove-group-rate') != null){
    const trigger = document.querySelector('.remove-group-rate');
    const fields = document.querySelector('.group-input-fields');
    const labels = document.querySelector('.group-labels');
    const hr = document.querySelector('.group-hr');    
    const add = document.querySelector('.group-add-btn');    
    const banner = document.querySelector('.group-banner-btn');    
    
    trigger.addEventListener('click', () => {
        console.log('dsad');
        fields.classList.add('hidden') 
        labels.classList.add('hidden') 
        hr.classList.add('hidden') 
        add.classList.remove('hidden') 
        banner.classList.remove('hidden') 
    });
}

if(document.querySelector('.modal-container-laws') != null){
    const close = document.querySelector('.modal-container-laws');
    const modal = document.querySelector('.modal-laws');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-laws')){
            modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-laws').classList.add('hidden') 
        document.querySelector('.laws-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-laws') != null){
    const close = document.querySelector('#close-modal-laws');
    const modal = document.querySelector('.modal-laws');
    close.addEventListener('click', () => {
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-laws').classList.add('hidden') 
        document.querySelector('.laws-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-laws') != null){
    const close = document.querySelector('#open-modal-laws');
    const modal = document.querySelector('.modal-laws');
    close.addEventListener('click', () => {
        modal.classList.replace('_mvip18q', '_1ucy1zjv')
        document.querySelector('.modal-container-laws').classList.remove('hidden') 
        document.querySelector('.laws-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('.modal-container-tour') != null){
    const close = document.querySelector('.modal-container-tour');
    const modal = document.querySelector('.modal-tour');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-tour')){
            modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-tour').classList.add('hidden') 
        document.querySelector('.tour-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-tour') != null){
    const close = document.querySelector('#close-modal-tour');
    const modal = document.querySelector('.modal-tour');
    close.addEventListener('click', () => {
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-tour').classList.add('hidden') 
        document.querySelector('.tour-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-tour') != null){
    const close = document.querySelector('#open-modal-tour');
    const modal = document.querySelector('.modal-tour');
    close.addEventListener('click', () => {
        modal.classList.replace('_mvip18q', '_1ucy1zjv')
        document.querySelector('.modal-container-tour').classList.remove('hidden') 
        document.querySelector('.tour-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('.modal-container-animals') != null){
    const close = document.querySelector('.modal-container-animals');
    const modal = document.querySelector('.modal-animals');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-animals')){
            modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-animals').classList.add('hidden') 
        document.querySelector('.animals-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-animals') != null){
    const close = document.querySelector('#close-modal-animals');
    const modal = document.querySelector('.modal-animals');
    close.addEventListener('click', () => {
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-animals').classList.add('hidden') 
        document.querySelector('.animals-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-animals') != null){
    const close = document.querySelector('#open-modal-animals');
    const modal = document.querySelector('.modal-animals');
    close.addEventListener('click', () => {
        modal.classList.replace('_mvip18q', '_1ucy1zjv')
        document.querySelector('.modal-container-animals').classList.remove('hidden') 
        document.querySelector('.animals-backdrop').classList.remove('hidden')
    });
}

function switchToogleBtn(callbackActive, callbackInactive) {
    console.log('init');
    if(document.querySelectorAll('.switch-toogle-btn') != null){
        const trigger = document.querySelectorAll('.switch-toogle-btn');
        trigger.forEach(element => {
            element.addEventListener('click', () => {
                if(element.classList.contains('switch-toogle-inactive')){
                    element.classList.remove('switch-toogle-inactive')
                    element.classList.add('switch-toogle-active')
                    element.children[0].classList.remove('form__switch-toggle')
                    element.children[0].classList.add('form__switch-toggle-checked')
                    element.children[0].children[0].classList.remove('hidden')
                    if(callbackActive){
                        callbackActive()
                    }
                }else{
                    element.classList.remove('switch-toogle-active')
                    element.classList.add('switch-toogle-inactive')
                    element.children[0].classList.remove('form__switch-toggle-checked')
                    element.children[0].classList.add('form__switch-toggle')
                    element.children[0].children[0].classList.add('hidden')
                    if(callbackInactive){
                        callbackInactive()
                    }
                }
            });
        });
    }
}
