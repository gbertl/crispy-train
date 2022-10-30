// if(document.querySelector('._virdaj') != null){
//     const close = document.querySelector('._virdaj');
//     const modal = document.querySelector('.modal-filter-list');
//     close.addEventListener('click', (e) => {
//         if(e.target.classList.contains('_virdaj')){
//             modal.classList.replace('_wheg71v', '_dsadsad')
//             setTimeout(() => {
//                 document.querySelector('._virdaj').classList.add('hidden') 
//             }, 500);
//             document.querySelector('._1t0jy5tw').classList.add('hidden')
//         }
//     });
// }

// if(document.querySelector('#close-modal-filter-list') != null){
//     const close = document.querySelector('#close-modal-filter-list');
//     const modal = document.querySelector('.modal-filter-list');
//     close.addEventListener('click', () => {
//         modal.classList.replace('_wheg71v', '_dsadsad')
//         setTimeout(() => {
//             document.querySelector('._virdaj').classList.add('hidden') 
//         }, 500);
//         document.querySelector('._1t0jy5tw').classList.add('hidden')
//     });
// }

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

// if(document.querySelector('#open-modal-filter-list') != null){
//     const close = document.querySelector('#open-modal-filter-list');
//     const modal = document.querySelector('.modal-filter-list');
//     close.addEventListener('click', () => {
//         modal.classList.replace('_dsadsad', '_wheg71v')
//         document.querySelector('._virdaj').classList.remove('hidden') 
//         document.querySelector('._1t0jy5tw').classList.remove('hidden')
//     });
// }