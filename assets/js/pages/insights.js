if(document.querySelector('._g2ext') != null){
    const close = document.querySelector('._g2ext');
    const modal = document.querySelector('.modal-date-range');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('_g2ext')){
            modal.classList.replace('_ewwxwe', '_1m9khubh')
            document.querySelector('._g2ext').classList.add('hidden') 
            document.querySelector('._ybk1kl0').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-date-range') != null){
    const close = document.querySelector('#close-modal-date-range');
    const modal = document.querySelector('.modal-date-range');
    close.addEventListener('click', () => {
        modal.classList.replace('_ewwxwe', '_1m9khubh')
        document.querySelector('._g2ext').classList.add('hidden') 
        document.querySelector('._ybk1kl0').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-date-range') != null){
    const close = document.querySelector('#open-modal-date-range');
    const modal = document.querySelector('.modal-date-range');
    close.addEventListener('click', () => {
        modal.classList.replace('_1m9khubh', '_ewwxwe')
        document.querySelector('._g2ext').classList.remove('hidden') 
        document.querySelector('._ybk1kl0').classList.remove('hidden')
    });
}

if(document.querySelector('.modal-container-overall') != null){
    const close = document.querySelector('.modal-container-overall');
    const modal = document.querySelector('.modal-overall');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-overall')){
            modal.classList.replace('_1ucy1zjv', '_mvip18q')
            document.querySelector('.modal-container-overall').classList.add('hidden') 
            document.querySelector('.overall-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-overall') != null){
    const close = document.querySelector('#close-modal-overall');
    const modal = document.querySelector('.modal-overall');
    close.addEventListener('click', () => {
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-overall').classList.add('hidden') 
        document.querySelector('.overall-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-overall') != null){
    const close = document.querySelector('#open-modal-overall');
    const modal = document.querySelector('.modal-overall');
    close.addEventListener('click', () => {
        modal.classList.replace('_mvip18q', '_1ucy1zjv')
        document.querySelector('.modal-container-overall').classList.remove('hidden') 
        document.querySelector('.overall-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('.modal-container-lower') != null){
    const close = document.querySelector('.modal-container-lower');
    const modal = document.querySelector('.modal-lower');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('modal-container-lower')){
            modal.classList.replace('_1ucy1zjv', '_mvip18q')
            document.querySelector('.modal-container-lower').classList.add('hidden') 
            document.querySelector('.lower-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-lower') != null){
    const close = document.querySelector('#close-modal-lower');
    const modal = document.querySelector('.modal-lower');
    close.addEventListener('click', () => {
        modal.classList.replace('_1ucy1zjv', '_mvip18q')
        document.querySelector('.modal-container-lower').classList.add('hidden') 
        document.querySelector('.lower-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-lower') != null){
    const close = document.querySelector('#open-modal-lower');
    const modal = document.querySelector('.modal-lower');
    close.addEventListener('click', () => {
        modal.classList.replace('_mvip18q', '_1ucy1zjv')
        document.querySelector('.modal-container-lower').classList.remove('hidden') 
        document.querySelector('.lower-backdrop').classList.remove('hidden')
    });
}