if(document.querySelector('#close-modal-dp') != null){
    const close = document.querySelector('#close-modal-dp');
    const modal = document.querySelector('.modal-dp');
    const modalM = document.querySelector('.modal-dp-m');
    close.addEventListener('click', () => {
        modal.classList.replace('_5wyy9re', '_1tbjv3ch')
        modalM.classList.replace('_njcq40o', '_iwziubj')
        setTimeout(() => {
            document.querySelector('._g2ext').classList.add('hidden')
        }, 500);
        document.querySelector('._ybk1kl0').classList.add('hidden')
        document.querySelector('._g2ext').classList.remove('max-hidden-md')
        document.querySelector('._ybk1kl0').classList.remove('max-hidden-md')

        document.querySelector('._1t0jy5tw').classList.add('hidden')
        document.querySelector('._vxvq8x').classList.add('hidden') 
        document.querySelector('._1t0jy5tw').classList.remove('min-hidden-md')
        document.querySelector('._vxvq8x').classList.remove('min-hidden-md')
    });
}

if(document.querySelector('#close-modal-dp-m') != null){
    const close = document.querySelector('#close-modal-dp-m');
    const modal = document.querySelector('.modal-dp');
    const modalM = document.querySelector('.modal-dp-m');
    close.addEventListener('click', () => {
        modal.classList.replace('_5wyy9re', '_1tbjv3ch')
        modalM.classList.replace('_njcq40o', '_iwziubj')
        setTimeout(() => {
            document.querySelector('._vxvq8x').classList.add('hidden') 
        }, 500);
        document.querySelector('._ybk1kl0').classList.add('hidden')
        document.querySelector('._g2ext').classList.add('hidden')
        document.querySelector('._g2ext').classList.remove('max-hidden-md')
        document.querySelector('._ybk1kl0').classList.remove('max-hidden-md')

        document.querySelector('._1t0jy5tw').classList.add('hidden')
        document.querySelector('._1t0jy5tw').classList.remove('min-hidden-md')
        document.querySelector('._vxvq8x').classList.remove('min-hidden-md')
    });
}

if(document.querySelector('._g2ext') != null){
    const close = document.querySelector('._g2ext');
    const modal = document.querySelector('.modal-dp');
    const modalM = document.querySelector('.modal-dp-m');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('_g2ext')){
            modal.classList.replace('_5wyy9re', '_1tbjv3ch')
            modalM.classList.replace('_njcq40o', '_iwziubj')
            setTimeout(() => {
                document.querySelector('._g2ext').classList.add('hidden')
            }, 500);
            document.querySelector('._ybk1kl0').classList.add('hidden')
            document.querySelector('._g2ext').classList.remove('max-hidden-md')
            document.querySelector('._ybk1kl0').classList.remove('max-hidden-md')

            document.querySelector('._1t0jy5tw').classList.add('hidden')
            document.querySelector('._vxvq8x').classList.add('hidden')
            document.querySelector('._1t0jy5tw').classList.remove('min-hidden-md')
            document.querySelector('._vxvq8x').classList.remove('min-hidden-md')
        }
    });
}

if(document.querySelector('#open-modal-dp') != null){
    const close = document.querySelector('#open-modal-dp');
    const modal = document.querySelector('.modal-dp');
    const modalM = document.querySelector('.modal-dp-m');
    close.addEventListener('click', () => {
        console.log('click');
        modal.classList.replace('_1tbjv3ch', '_5wyy9re')
        modalM.classList.replace('_iwziubj', '_njcq40o')
        document.querySelector('._g2ext').classList.remove('hidden')
        document.querySelector('._ybk1kl0').classList.remove('hidden')
        document.querySelector('._g2ext').classList.add('max-hidden-md')
        document.querySelector('._ybk1kl0').classList.add('max-hidden-md')

        document.querySelector('._1t0jy5tw').classList.remove('hidden')
        document.querySelector('._vxvq8x').classList.remove('hidden')
        document.querySelector('._1t0jy5tw').classList.add('min-hidden-md')
        document.querySelector('._vxvq8x').classList.add('min-hidden-md')
    });
}

// _njcq40o
// _iwziubj