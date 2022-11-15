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
        document.querySelector('.modal__container').classList.add('hidden') 
        document.querySelector('._1t0jy5tw').classList.remove('min-hidden-md')
        document.querySelector('.modal__container').classList.remove('min-hidden-md')
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
            document.querySelector('.modal__container').classList.add('hidden') 
        }, 500);
        document.querySelector('._ybk1kl0').classList.add('hidden')
        document.querySelector('._g2ext').classList.add('hidden')
        document.querySelector('._g2ext').classList.remove('max-hidden-md')
        document.querySelector('._ybk1kl0').classList.remove('max-hidden-md')

        document.querySelector('._1t0jy5tw').classList.add('hidden')
        document.querySelector('._1t0jy5tw').classList.remove('min-hidden-md')
        document.querySelector('.modal__container').classList.remove('min-hidden-md')
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
            document.querySelector('.modal__container').classList.add('hidden')
            document.querySelector('._1t0jy5tw').classList.remove('min-hidden-md')
            document.querySelector('.modal__container').classList.remove('min-hidden-md')
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
        document.querySelector('.modal__container').classList.remove('hidden')
        document.querySelector('._1t0jy5tw').classList.add('min-hidden-md')
        document.querySelector('.modal__container').classList.add('min-hidden-md')
    });
}

if(document.querySelector('#close-modal-help') != null){
    const close = document.querySelector('#close-modal-help');
    const modal = document.querySelector('.modal-help');
    close.addEventListener('click', () => {
        modal.classList.replace('_mtm84lo', '_o4zczix')
        setTimeout(() => {
            document.querySelector('._1p1cugo').classList.add('hidden')
        }, 500);
        document.querySelector('._1t0jy5tw.help-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-help') != null){
    const close = document.querySelector('#open-modal-help');
    const modal = document.querySelector('.modal-help');
    close.addEventListener('click', () => {
        modal.classList.replace('_o4zczix', '_mtm84lo')
        document.querySelector('._1p1cugo').classList.remove('hidden')
        document.querySelector('._1t0jy5tw.help-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('#open-modal-help-m') != null){
    const close = document.querySelector('#open-modal-help-m');
    const modal = document.querySelector('.modal-help');
    close.addEventListener('click', () => {
        modal.classList.replace('_o4zczix', '_mtm84lo')
        document.querySelector('._1p1cugo').classList.remove('hidden')
        document.querySelector('._1t0jy5tw.help-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('._1p1cugo') != null){
    const close = document.querySelector('._1p1cugo');
    const modal = document.querySelector('.modal-help');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('_1p1cugo')){
            modal.classList.replace('_mtm84lo', '_o4zczix')
            setTimeout(() => {
                document.querySelector('._1p1cugo').classList.add('hidden')
            }, 500);
            document.querySelector('._1t0jy5tw.help-backdrop').classList.add('hidden')
        }
    });
}


if(document.querySelector('#close-modal-save-exit') != null){
    const close = document.querySelector('#close-modal-save-exit');
    const modal = document.querySelector('.modal-save-exit');
    close.addEventListener('click', () => {
        modal.classList.replace('_ewwxwe', '_1m9khubh')
        setTimeout(() => {
            document.querySelector('._g2ext.save-exit-modal-container').classList.add('hidden')
        }, 500);
        document.querySelector('._1t0jy5tw.save-exit-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-save-exit') != null){
    const close = document.querySelector('#open-modal-save-exit');
    const modal = document.querySelector('.modal-save-exit');
    close.addEventListener('click', () => {
        modal.classList.replace('_1m9khubh', '_ewwxwe')
        document.querySelector('._g2ext.save-exit-modal-container').classList.remove('hidden')
        document.querySelector('._1t0jy5tw.save-exit-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('.save-exit-modal-container') != null){
    const close = document.querySelector('.save-exit-modal-container');
    const modal = document.querySelector('.modal-save-exit');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('save-exit-modal-container')){
            modal.classList.replace('_ewwxwe', '_1m9khubh')
            setTimeout(() => {
                document.querySelector('._g2ext.save-exit-modal-container').classList.add('hidden')
            }, 500);
            document.querySelector('._1t0jy5tw.save-exit-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#open-modal-save-exit-m') != null){
    const close = document.querySelector('#open-modal-save-exit-m');
    const modal = document.querySelector('.modal-save-exit');
    close.addEventListener('click', () => {
        modal.classList.replace('_1m9khubh', '_ewwxwe')
        document.querySelector('._g2ext.save-exit-modal-container').classList.remove('hidden')
        document.querySelector('._1t0jy5tw.save-exit-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('#open-modal-price-help') != null){
    const close = document.querySelector('#open-modal-price-help');
    const modal = document.querySelector('.modal-price-help');
    close.addEventListener('click', () => {
        modal.classList.replace('_1m9khubh', '_ewwxwe')
        document.querySelector('._g2ext.price-help-modal-container').classList.remove('hidden')
        document.querySelector('._1t0jy5tw.price-exit-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('#close-modal-price-help') != null){
    const close = document.querySelector('#close-modal-price-help');
    const modal = document.querySelector('.modal-price-help');
    close.addEventListener('click', () => {
        modal.classList.replace('_ewwxwe', '_1m9khubh')
        document.querySelector('._g2ext.price-help-modal-container').classList.add('hidden')
        document.querySelector('._1t0jy5tw.price-exit-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('.price-help-modal-container') != null){
    const close = document.querySelector('.price-help-modal-container');
    const modal = document.querySelector('.modal-price-help');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('price-help-modal-container')){
            modal.classList.replace('_ewwxwe', '_1m9khubh')
            document.querySelector('._g2ext.price-help-modal-container').classList.add('hidden')
            document.querySelector('._1t0jy5tw.price-exit-backdrop').classList.add('hidden')
        }
    });
}

if(document.querySelector('#open-modal-question') != null){
    const close = document.querySelector('#open-modal-question');
    const modal = document.querySelector('.modal-question');
    close.addEventListener('click', () => {
        modal.classList.replace('_1m9khubh', '_ewwxwe')
        document.querySelector('._g2ext.question-modal-container').classList.remove('hidden')
        document.querySelector('._1t0jy5tw.question-backdrop').classList.remove('hidden')
    });
}

if(document.querySelector('#close-modal-question') != null){
    const close = document.querySelector('#close-modal-question');
    const modal = document.querySelector('.modal-question');
    close.addEventListener('click', () => {
        modal.classList.replace('_ewwxwe', '_1m9khubh')
        document.querySelector('._g2ext.question-modal-container').classList.add('hidden')
        document.querySelector('._1t0jy5tw.question-backdrop').classList.add('hidden')
    });
}

if(document.querySelector('.question-modal-container') != null){
    const close = document.querySelector('.question-modal-container');
    const modal = document.querySelector('.modal-question');
    close.addEventListener('click', (e) => {
        if(e.target.classList.contains('question-modal-container')){}{
            modal.classList.replace('_ewwxwe', '_1m9khubh')
            document.querySelector('._g2ext.question-modal-container').classList.add('hidden')
            document.querySelector('._1t0jy5tw.question-backdrop').classList.add('hidden')   
        }
    });
}