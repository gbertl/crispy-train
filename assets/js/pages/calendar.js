if(document.querySelector('#action-calendar-btn-tooltip') != null){
    const tooltip = document.querySelector('.action-tooltip');
    document.querySelector('#action-calendar-btn-tooltip').addEventListener('click', () => {
        if(tooltip.classList.contains('hidden')) {
            tooltip.classList.remove('hidden')
        } else {
            tooltip.classList.add('hidden')
        }
    });
}

if(document.querySelector('#date-btn-overlay') != null){
    const tooltip = document.querySelector('.calendar-overlay');
    document.querySelector('#date-btn-overlay').addEventListener('click', () => {
        if(tooltip.classList.contains('hidden')) {
            tooltip.classList.remove('hidden')
        } else {
            tooltip.classList.add('hidden')
        }
    });
}