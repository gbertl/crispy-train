const input = document.querySelector('input')
const handleInput = (e) => {
    const target = e.target
    const parent = target.closest('.spinner-chart__input-price') || target.closest('._yqkdtbl')
    parent.classList.contains('spinner-chart__input-price')
        ? parent.classList.replace('spinner-chart__input-price', '_yqkdtbl')
        : (parent.classList = 'spinner-chart__input-price')

    const inputLabel = parent.querySelector('.auth-container__form-label') || parent.querySelector('._1m2ich98')
    if (target.value.length) {
        inputLabel.classList = '_1m2ich98'
    } else {
        inputLabel.classList.contains('auth-container__form-label')
            ? inputLabel.classList.replace('auth-container__form-label', '_1m2ich98')
            : (inputLabel.classList = 'auth-container__form-label')
    }

    const inputWrapper = parent.querySelector('.auth-container__form-field-wrapper')
        || parent.querySelector('.auth-container__form-input-field-wrapper')
        || parent.querySelector('._fywymp7')
    if (target.value.length) {
        inputWrapper.classList = '_fywymp7'
    } else {
        inputWrapper.classList.contains('auth-container__form-field-wrapper')
            ? inputWrapper.classList.replace('auth-container__form-field-wrapper', 'auth-container__form-input-field-wrapper')
            : (inputWrapper.classList = 'auth-container__form-field-wrapper')
    }

    target.classList.contains('form__input')
        ? target.classList.replace('form__input', '_c5rhl5')
        : (target.classList = 'form__input')
}
input.addEventListener('focus', handleInput, false)
input.addEventListener('blur', handleInput, false)

document.querySelectorAll('.expandable-accordation')
    .forEach((target) => {
        target.addEventListener('click', (e) => {
            const titleAccordation = target.children[0].children[0]
            const descAccordation = target.children[1]
            const up = target.children[0].children[0].children[0].children[0]
            const down = target.children[0].children[0].children[0].children[1]

            if (target.attributes[2].value === 'false') {
                target.setAttribute('data-expand', true)
                // titleAccordation.classList.add('rzhf7eq')
                // titleAccordation.classList.add('r1y3t7ro')
                // titleAccordation.classList.remove('rat82ei')

                titleAccordation.classList.add('r1y3t7ro')

                descAccordation.classList.remove('hidden')

                up.classList.remove('hidden')
                down.classList.add('hidden')

            } else {
                target.setAttribute('data-expand', false)
                // titleAccordation.classList.remove('rzhf7eq')
                // titleAccordation.classList.remove('r1y3t7ro')
                // titleAccordation.classList.add('rat82ei')

                titleAccordation.classList.remove('r1y3t7ro')

                descAccordation.classList.add('hidden')

                up.classList.add('hidden')
                down.classList.remove('hidden')
            }
        });
    })