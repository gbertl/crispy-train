const modals = document.querySelectorAll('[data-modal]')

modals.forEach((e) => {
    const modal = document.querySelector(e.dataset.modal)

    const openModal = () => modal.classList.remove('d-none')
    const closeModal = () => modal.classList.add('d-none')

    e.addEventListener('click', (e) => {
        e.preventDefault()

        openModal()

        const buttonClose = modal.querySelectorAll('[data-button="close"]')

        buttonClose.forEach((e) => {
            e.addEventListener('click', (e) => {
                event.preventDefault()

                closeModal()
            })
        })
    })

    document.addEventListener('click', (e) => {
        const modalBody = modal.querySelector('._z4lmgp')
        if (!modalBody.contains(e.target) && !e.target.closest('[data-modal]')) {
            closeModal()
        }
    })

    document.addEventListener('keydown', (e) => {
        e.key === 'Escape' && closeModal()
    })
})