document.querySelector('#close-help-modal').addEventListener('click', () => {
    const modal = document.querySelector('#help-modal')
    modal.classList.add('hidden')
});

document.addEventListener('click', (e) => {
    console.dir(e.target.id);
    console.dir(e.target.parentElement);

    if(e.target.id === 'help-btn' || e.target.parentElement.id === 'help-btn' ){
        e.preventDefault()
    }else {
        const modal = document.querySelector('#help-modal')
        if(!modal.classList.contains('hidden')){
            modal.classList.add('hidden')
        }
    }
});

document.querySelector('#help-btn').addEventListener('click', () => {
    const modal = document.querySelector('#help-modal')
    if(modal.classList.contains('hidden')){
        modal.classList.remove('hidden')
    } else {
        modal.classList.add('hidden')
    }
});