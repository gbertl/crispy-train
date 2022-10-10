const container = document.querySelector('#GALLERY_PHOTOS')
const photos = document.querySelectorAll('[data-testid="draggable-photo"]')

let dragged = null

const getMouseOffset = (e) => {
    const targetRect = e.target.getBoundingClientRect()
    const offset = {
        x: e.pageX - targetRect.left,
        y: e.pageY - targetRect.top
    }
    return offset
}

const getElementVerticalCenter = (e) => {
    const rect = e.target.getBoundingClientRect()
    return (rect.bottom - rect.top) / 2
}

photos.forEach(photo => {
    photo.addEventListener('dragstart', (e) => {
        dragged = e.target

        dragged.querySelector('div').style.pointerEvents = 'none'
        dragged.querySelector('.become-a-host__photos-action').classList.add('hidden')
    })

    photo.addEventListener('dragover', (e) => {
        e.preventDefault()

        if (e.currentTarget != dragged && e.currentTarget.dataset.testid == 'draggable-photo') {
            let currentIndex = [...container.querySelectorAll('._1oa4lmzv:not(:last-child)')].indexOf(e.currentTarget.closest('._1oa4lmzv'))

            const offset = getMouseOffset(e)
            const middleY = getElementVerticalCenter(e)

            if (offset.y > middleY) {
                container.insertBefore(dragged.closest('._1oa4lmzv'), e.currentTarget.closest('._1oa4lmzv'))
            } else if (container.children[currentIndex + 1]) {
                container.insertBefore(dragged.closest('._1oa4lmzv'), e.currentTarget.closest('._1oa4lmzv').nextSibling)
            }
        }

        if (e.currentTarget == dragged) {
            dragged.querySelector('._e296pg').classList.remove('hidden')
            dragged.querySelector('.become-a-host__photos-img-full').classList.add('hidden')
            dragged.querySelector('.become-a-host__photos-action').classList.add('hidden')
        }
    })

    photo.addEventListener('dragleave', (e) => {
        e.preventDefault()

        dragged.querySelector('._e296pg').classList.add('hidden')
        dragged.querySelector('.become-a-host__photos-img-full').classList.remove('hidden')
        dragged.querySelector('.become-a-host__photos-action').classList.remove('hidden')
    })

    photo.addEventListener('dragend', (e) => {
        dragged.querySelector('div').removeAttribute('style')

        if (e.currentTarget == dragged) {
            dragged.querySelector('._e296pg').classList.add('hidden')
            dragged.querySelector('.become-a-host__photos-img-full').classList.remove('hidden')
            dragged.querySelector('.become-a-host__photos-action').classList.remove('hidden')
        }

        dragged = null
    })
})
