if(document.querySelector('#close-modal-dp') != null){
    const close = document.querySelector('#close-modal-dp');
    const modal = document.querySelector('.modal-dp');
    close.addEventListener('click', () => {
        modal.classList.replace('_5wyy9re', '_1tbjv3ch')
        setTimeout(() => {
            document.querySelector('._g2ext').classList.add('hidden')
        }, 500);
        document.querySelector('._ybk1kl0').classList.add('hidden')
    });
}

if(document.querySelector('._g2ext') != null){
    const close = document.querySelector('._g2ext');
    const modal = document.querySelector('.modal-dp');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('_g2ext')){
            modal.classList.replace('_5wyy9re', '_1tbjv3ch')
            setTimeout(() => {
                document.querySelector('._g2ext').classList.add('hidden')
            }, 500);
            document.querySelector('._ybk1kl0').classList.add('hidden')
        }
    });
}

if(document.querySelector('#open-modal-dp') != null){
    const close = document.querySelector('#open-modal-dp');
    const modal = document.querySelector('.modal-dp');
    close.addEventListener('click', () => {
        console.log('click');
        modal.classList.replace('_1tbjv3ch', '_5wyy9re')
        document.querySelector('._g2ext').classList.remove('hidden')
        document.querySelector('._ybk1kl0').classList.remove('hidden')
    });
}