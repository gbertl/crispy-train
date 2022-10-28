window.addEventListener('scroll', (e) => {
    var scroll = window.scrollY;
    const navbar = document.querySelector('.collapsable-navbar')
    if(scroll >= 150){
        console.log('hide');
        navbar.classList.add('_1x6d8808');
        navbar.classList.remove('_1lovwbn');
    }else {
        console.log('show');
        navbar.classList.add('_1lovwbn');
        navbar.classList.remove('_1x6d8808');
    }
    // document.getElementById("scroll_position").textContent=scroll;
})


if(document.querySelector('._virdaj') != null){
    const close = document.querySelector('._virdaj');
    const modal = document.querySelector('.modal-filter-list');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('_virdaj')){
            modal.classList.replace('_wheg71v', '_dsadsad')
            setTimeout(() => {
                document.querySelector('._virdaj').classList.add('hidden') 
            }, 500);
            document.querySelector('._1t0jy5tw').classList.add('hidden')
        }
    });
}

if(document.querySelector('#close-modal-filter-list') != null){
    const close = document.querySelector('#close-modal-filter-list');
    const modal = document.querySelector('.modal-filter-list');
    close.addEventListener('click', () => {
        modal.classList.replace('_wheg71v', '_dsadsad')
        setTimeout(() => {
            document.querySelector('._virdaj').classList.add('hidden') 
        }, 500);
        document.querySelector('._1t0jy5tw').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-filter-list-m') != null){
    const close = document.querySelector('#open-modal-filter-list-m');
    const modal = document.querySelector('.modal-filter-list');
    close.addEventListener('click', () => {
        modal.classList.replace('_dsadsad', '_wheg71v')
        document.querySelector('._virdaj').classList.remove('hidden') 
        document.querySelector('._1t0jy5tw').classList.remove('hidden')
    });
}

if(document.querySelector('#open-modal-filter-list') != null){
    const close = document.querySelector('#open-modal-filter-list');
    const modal = document.querySelector('.modal-filter-list');
    close.addEventListener('click', () => {
        modal.classList.replace('_dsadsad', '_wheg71v')
        document.querySelector('._virdaj').classList.remove('hidden') 
        document.querySelector('._1t0jy5tw').classList.remove('hidden')
    });
}