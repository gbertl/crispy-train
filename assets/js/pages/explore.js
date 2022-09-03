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
            whoButton.contains('b174x59c')
                ? whoButton.replace('b174x59c', 'b1odri3w')
                : whoButton.replace('b1odri3w', 'b174x59c')

            const searchWho = document.querySelector('#search-who').classList
            searchWho.contains('hidden')
                ? searchWho.remove('hidden')
                : searchWho.add('hidden')
            break;

        case 'anyweek':
            const checkInButton = document.querySelectorAll('.b174x59c, .b1odri3w')[0].classList
            checkInButton.contains('b174x59c')
                ? checkInButton.replace('b174x59c', 'b1odri3w')
                : checkInButton.replace('b1odri3w', 'b174x59c')

            const anyweekPanel = document.querySelector('#anyweek-panel').classList
            anyweekPanel.contains('hidden')
                ? anyweekPanel.remove('hidden')
                : anyweekPanel.add('hidden')
            break;

        case 'anywhere':
            const anywhereLabel = document.querySelectorAll('.ix85u26, .i1eek2sl')
                .forEach((target) => {
                    const classList = target.classList
                    classList.contains('ix85u26')
                        ? classList.replace('ix85u26', 'i1eek2sl')
                        : classList.replace('i1eek2sl', 'ix85u26')
                })

            const content = document.querySelector('.p1jg7hjv').classList
            content.contains('p5mmcz9')
                ? content.remove('p5mmcz9')
                : content.add('p5mmcz9')
            break;

        default:
            return;
    }

    const header = document.querySelectorAll('.cxy853f, .cn7o9ly')
        .forEach((target) => {
            const classList = target.classList
            classList.contains('cxy853f')
                ? classList.replace('cxy853f', 'cn7o9ly')
                : classList.replace('cn7o9ly', 'cxy853f')
        })

    const filters = document.querySelectorAll('.lr5v90m, .l1h6eamc')
        .forEach((target) => {
            const classList = target.classList
            classList.contains('lr5v90m')
                ? classList.replace('lr5v90m', 'l1h6eamc')
                : classList.replace('l1h6eamc', 'lr5v90m')
        })

    const filtersWrapper = document.querySelectorAll('.b1t24mo5, .b12rw3s8')
        .forEach((target) => {
            const classList = target.classList
            classList.contains('b1t24mo5')
                ? classList.replace('b1t24mo5', 'b12rw3s8')
                : classList.replace('b12rw3s8', 'b1t24mo5')
        })

    const searchTablPanel = document.querySelector('#search-tabpanel').classList
    searchTablPanel.contains('c1oqx6sn')
        ? searchTablPanel.replace('c1oqx6sn', 'ceyij5b')
        : searchTablPanel.replace('ceyij5b', 'c1oqx6sn')

    const searchButton = document.querySelectorAll('.bu69x9v, .b14gupvm')
        .forEach((target) => {
            const classList = target.classList
            classList.contains('bu69x9v')
                ? classList.replace('bu69x9v', 'b14gupvm')
                : classList.replace('b14gupvm', 'bu69x9v')
        })

    const searchButtonIcon = document.querySelector('#search-btn-text').classList
    searchButtonIcon.contains('hidden')
        ? searchButtonIcon.remove('hidden')
        : searchButtonIcon.add('hidden')

    const searchButtonhText = document.querySelector('.c8th90').classList
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
    if (!modalBody.contains(e.target) || e.target.classList.contains('o8h0gdx')) {
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
