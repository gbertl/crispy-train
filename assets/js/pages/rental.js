if(document.querySelector('#show-full') != null){
    const trigger = document.querySelector('#show-full');
    const showList = document.querySelector('.show-list-wrapper');
    const showFull = document.querySelector('.show-full-wrapper');
    const mainBody = document.querySelector('#site-content.cy593r8');
    const listWrapper = document.querySelector('.loc-list-wrapper');
    const mapWrapper = document.querySelector('.full-map-wrapper');
    
    trigger.addEventListener('click', () => {
        showList.classList.remove('hidden') 
        showFull.classList.add('hidden') 
        mainBody.classList.add('cq074iv')
        listWrapper.classList.add('f15dgkuj')
        listWrapper.classList.add('f1bq18ci')
        mapWrapper.classList.replace('m247d7z', 'm94ejow')
    });
}

if(document.querySelector('#show-list') != null){
    const trigger = document.querySelector('#show-list');
    const showList = document.querySelector('.show-list-wrapper');
    const showFull = document.querySelector('.show-full-wrapper');
    const mainBody = document.querySelector('#site-content.cy593r8');
    const listWrapper = document.querySelector('.loc-list-wrapper');
    const mapWrapper = document.querySelector('.full-map-wrapper');
    
    trigger.addEventListener('click', () => {
        showList.classList.add('hidden') 
        showFull.classList.remove('hidden') 
        mainBody.classList.remove('cq074iv')
        listWrapper.classList.remove('f15dgkuj')
        listWrapper.classList.remove('f1bq18ci')
        mapWrapper.classList.replace('m94ejow', 'm247d7z')
    });
}

