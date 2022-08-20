const container = document.querySelector('._dx8zwa')

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