
if( document.querySelector('#close-help-modal') != null){
    console.log(document.querySelector('#close-help-modal'));
    document.querySelector('#close-help-modal').addEventListener('click', () => {
        const modal = document.querySelector('#help-modal')
        modal.classList.add('hidden')
    });
}

if (document.querySelector('#help-modal') != null) {
    document.addEventListener('click', (e) => {
        if(e.target.id === 'help-btn' || e.target.parentElement.id === 'help-btn' ){
            e.preventDefault()
        }else {
            const modal = document.querySelector('#help-modal')
            if(!modal.classList.contains('hidden')){
                modal.classList.add('hidden')
            }
        }
    });
}

if(document.querySelector('#help-btn') != null) {
    document.querySelector('#help-btn').addEventListener('click', () => {
        const modal = document.querySelector('#help-modal')
        if(modal.classList.contains('hidden')){
            modal.classList.remove('hidden')
        } else {
            modal.classList.add('hidden')
        }
    });
}

if(document.querySelector('._tfpul05') != null){
    const prev = document.querySelector('._tfpul05');
    const next = document.querySelector('._1i9dva05');
    const tabs = document.querySelector('._qc3ank');
    prev.addEventListener('click', () => {
        if(!prev.classList.contains('hidden')) {
            prev.classList.add('hidden')
            next.classList.remove('hidden')
            tabs.scrollBy(0, 0);
        }
    });
}

if(document.querySelector('._1i9dva05') != null){
    const prev = document.querySelector('._tfpul05');
    const next = document.querySelector('._1i9dva05');
    const tabs = document.querySelector('.tab');
    next.addEventListener('click', () => {
        if(!next.classList.contains('hidden')) {
            next.classList.add('hidden')
            prev.classList.remove('hidden')
            console.log(tabs);
            tabs.scrollBy(10, 0);
            // tabs.scrollBy({ top: 0, left: 500, behavior: 'smooth' });
        }
    });
}

if(document.querySelector('#close-modal-help') != null){
    const close = document.querySelector('#close-modal-help');
    const modal = document.querySelector('.modal-help');
    close.addEventListener('click', () => {
        modal.classList.replace('_ojerypf', '_1iw81xea')
        document.querySelector('._j292vx').classList.add('hidden')
    });
}

if(document.querySelector('#open-modal-help') != null){
    const open = document.querySelector('#open-modal-help');
    const modal = document.querySelector('.modal-help');
    open.addEventListener('click', () => {
        modal.classList.replace('_1iw81xea', '_ojerypf')
        document.querySelector('._j292vx').classList.remove('hidden')
    });
}

if(document.querySelector('[name="select_feedback_theme"]') != null){
    const select = document.querySelector('[name="select_feedback_theme"]');
    select.addEventListener('change', (e) => {
        if(select.value != "Please Select"){
            document.querySelector('.topic-select').classList.remove('hidden');
        }
    });
}

if(document.querySelector('[name="select_feedback_type"]') != null){
    const select = document.querySelector('[name="select_feedback_type"]');
    select.addEventListener('change', (e) => {
        if(select.value != "Please Select"){
            document.querySelector('.fuzmsn8').classList.remove('hidden');
        }
    });
}

if(document.querySelector('[name="textarea_feedback"]') != null){
    const textarea = document.querySelector('[name="textarea_feedback"]');
    textarea.addEventListener('keyup', (e) => {
        if(textarea.value!="") {
            document.querySelector('.share-feedback-btn').classList.remove('hidden');
        }
    });
}