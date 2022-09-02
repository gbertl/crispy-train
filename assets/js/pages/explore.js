const container = document.querySelector('.new_scrollable')

const prevButton = document.querySelector('button[aria-label="Previous New this week"]')
const nextButton = document.querySelector('button[aria-label="Next New this week"]')

container.addEventListener('scroll', (e) => {
    const currentScrollLeft = e.target.scrollLeft
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (currentScrollLeft !== 0 && currentScrollLeft !== maxScrollLeft) {
        prevButton.removeAttribute('disabled')
        nextButton.removeAttribute('disabled')
    }

    if (currentScrollLeft === 0) {
        prevButton.setAttribute('disabled', true)
    }

    if ((currentScrollLeft + 10) > maxScrollLeft) {
        nextButton.setAttribute('disabled', true)
    }

    console.log(currentScrollLeft, maxScrollLeft)
})

prevButton.addEventListener('click', () => {
    container.scrollBy({ top: 0, left: -500, behavior: 'smooth' })
})

nextButton.addEventListener('click', () => {
    container.scrollBy({ top: 0, left: +500, behavior: 'smooth' })
})

const toggleModal = (type) => {

    switch (type) {
        case 'addguests':
            const whoButton = document.querySelector('[data-testid=structured-search-input-field-guests-button]').classList
            whoButton.contains('header__search-tabs-filter-btn-container-inactive')
                ? whoButton.replace('header__search-tabs-filter-btn-container-inactive', 'header__search-tabs-filter-btn-container-active')
                : whoButton.replace('header__search-tabs-filter-btn-container-active', 'header__search-tabs-filter-btn-container-inactive')

            const searchWho = document.querySelector('#search-who').classList
            searchWho.contains('hidden')
                ? searchWho.remove('hidden')
                : searchWho.add('hidden')
            break;

        case 'anyweek':
            const checkInButton = document.querySelectorAll('.header__search-tabs-filter-btn-container-inactive, .header__search-tabs-filter-btn-container-active')[0].classList
            checkInButton.contains('header__search-tabs-filter-btn-container-inactive')
                ? checkInButton.replace('header__search-tabs-filter-btn-container-inactive', 'header__search-tabs-filter-btn-container-active')
                : checkInButton.replace('header__search-tabs-filter-btn-container-active', 'header__search-tabs-filter-btn-container-inactive')

            const anyweekPanel = document.querySelector('#anyweek-panel').classList
            anyweekPanel.contains('hidden')
                ? anyweekPanel.remove('hidden')
                : anyweekPanel.add('hidden')
            break;

        case 'anywhere':
            const anywhereLabel = document.querySelectorAll('.header__search-tabs-filter-where-hide, .header__search-tabs-filter-where-show')
                .forEach((target) => {
                    const classList = target.classList
                    classList.contains('header__search-tabs-filter-where-hide')
                        ? classList.replace('header__search-tabs-filter-where-hide', 'header__search-tabs-filter-where-show')
                        : classList.replace('header__search-tabs-filter-where-show', 'header__search-tabs-filter-where-hide')
                })

            const content = document.querySelector('.header__search-tabs-filter-where-body').classList
            content.contains('header__search-tabs-filter-where-body-show')
                ? content.remove('header__search-tabs-filter-where-body-show')
                : content.add('header__search-tabs-filter-where-body-show')
            break;

        default:
            return;
    }

    const header = document.querySelectorAll('.header__search-tabs-hide, .header__search-tabs-show')
        .forEach((target) => {
            const classList = target.classList
            classList.contains('header__search-tabs-hide')
                ? classList.replace('header__search-tabs-hide', 'header__search-tabs-show')
                : classList.replace('header__search-tabs-show', 'header__search-tabs-hide')
        })

    const filters = document.querySelectorAll('.header__search-content, .l1h6eamc')
        .forEach((target) => {
            const classList = target.classList
            classList.contains('header__search-content')
                ? classList.replace('header__search-content', 'l1h6eamc')
                : classList.replace('l1h6eamc', 'header__search-content')
        })

    const filtersWrapper = document.querySelectorAll('.header__search-tabs-content-transition-hide, .header__search-tabs-content-transition-show')
        .forEach((target) => {
            const classList = target.classList
            classList.contains('header__search-tabs-content-transition-hide')
                ? classList.replace('header__search-tabs-content-transition-hide', 'header__search-tabs-content-transition-show')
                : classList.replace('header__search-tabs-content-transition-show', 'header__search-tabs-content-transition-hide')
        })

    const searchTablPanel = document.querySelector('#search-tabpanel').classList
    searchTablPanel.contains('header__search-tabs-filter-hide')
        ? searchTablPanel.replace('header__search-tabs-filter-hide', 'header__search-tabs-filter-show')
        : searchTablPanel.replace('header__search-tabs-filter-show', 'header__search-tabs-filter-hide')

    const searchButton = document.querySelectorAll('.header__search-tabs-filter-searchBtn-hide, .header__search-tabs-filter-searchBtn-show')
        .forEach((target) => {
            const classList = target.classList
            classList.contains('header__search-tabs-filter-searchBtn-hide')
                ? classList.replace('header__search-tabs-filter-searchBtn-hide', 'header__search-tabs-filter-searchBtn-show')
                : classList.replace('header__search-tabs-filter-searchBtn-show', 'header__search-tabs-filter-searchBtn-hide')
        })

    const searchButtonIcon = document.querySelector('#search-btn-text').classList
    searchButtonIcon.contains('hidden')
        ? searchButtonIcon.remove('hidden')
        : searchButtonIcon.add('hidden')

    const searchButtonhText = document.querySelector('.header__search-tabs-filter-searchBtn-content').classList
    searchButtonhText.contains('hidden')
        ? searchButtonhText.remove('hidden')
        : searchButtonhText.add('hidden')

    const searchBackdrop = document.querySelector('#search-backdrop').classList
    searchBackdrop.contains('hidden')
        ? searchBackdrop.remove('hidden')
        : searchBackdrop.add('hidden')
}

let tabId = null
document.querySelectorAll('#anywhere-btn, #anyweek-btn, #addguests-btn')
    .forEach((target) => {
        target.addEventListener('click', (e) => {
            const id = tabId = e.currentTarget.id.split('-')[0]

            toggleModal(tabId)
        });
    })

document.addEventListener('click', (e) => {
    const modalBody = document.querySelector('.h1wqqi3k')
    if (!modalBody.contains(e.target) || e.target.classList.contains('header__search-backdrop')) {
        toggleModal(tabId)
        tabId = null
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tabId) {
        toggleModal(tabId)
        tabId = null
    }
})
