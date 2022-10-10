const container = document.querySelector('#GALLERY_PHOTOS')
const photos = document.querySelectorAll('[data-testid="draggable-photo"]')

let dragged = null

photos.forEach(photo => {
    photo.addEventListener('dragstart', (e) => {
        dragged = e.target
        dragged.querySelector('.become-a-host__photos-action').classList.add('hidden')
    })

    photo.addEventListener('dragover', (e) => {
        e.preventDefault()

        if (e.currentTarget != dragged && e.currentTarget.dataset.testid == 'draggable-photo') {
            container.insertBefore(dragged.closest('._1oa4lmzv'), e.currentTarget.closest('._1oa4lmzv'))
        }

        if (e.currentTarget == dragged) {
            dragged.querySelector('._e296pg').classList.remove('hidden')
            dragged.querySelector('.become-a-host__photos-img-full').classList.add('hidden')
            dragged.querySelector('.become-a-host__photos-action').classList.add('hidden')
        }
    })

    photo.addEventListener('dragleave', (e) => {
        e.preventDefault()

        if (e.currentTarget != dragged) {
            dragged.querySelector('._e296pg').classList.add('hidden')
            dragged.querySelector('.become-a-host__photos-img-full').classList.remove('hidden')
            dragged.querySelector('.become-a-host__photos-action').classList.remove('hidden')
        }
    })

    photo.addEventListener('dragend', (e) => {
        if (e.currentTarget == dragged) {
            dragged.querySelector('._e296pg').classList.add('hidden')
            dragged.querySelector('.become-a-host__photos-img-full').classList.remove('hidden')
            dragged.querySelector('.become-a-host__photos-action').classList.remove('hidden')
        }

        dragged = null
    })
})