// const accordation = document.getElementsByClassName('expandable-accordation')

// console.dir(accordation);
// // accordation.addEventListener('click', (e) => {
// //     console.log('click');
// // })

document.querySelectorAll('.expandable-accordation')
    .forEach((target) => {
        target.addEventListener('click', (e) => {
            const titleAccordation = target.children[0].children[0]
            const descAccordation = target.children[1]
            const up = target.children[0].children[0].children[0].children[0]
            const down = target.children[0].children[0].children[0].children[1]

            if(target.attributes[2].value === 'false'){
                target.setAttribute('data-expand', true)
                titleAccordation.classList.add('rzhf7eq')
                titleAccordation.classList.add('r1y3t7ro')
                titleAccordation.classList.remove('rat82ei')

                descAccordation.classList.remove('hidden')

                up.classList.remove('hidden')
                down.classList.add('hidden')

            } else {
                target.setAttribute('data-expand', false)
                titleAccordation.classList.remove('rzhf7eq')
                titleAccordation.classList.remove('r1y3t7ro')
                titleAccordation.classList.add('rat82ei')

                descAccordation.classList.add('hidden')

                up.classList.add('hidden')
                down.classList.remove('hidden')
            }
        });
    })