document.querySelectorAll('.btn-outline-muted')
    .forEach((target) => {
        target.addEventListener('click', (e) => {
            const dislike = document.querySelector('.dislike')
            const like = document.querySelector('.like')
            console.log('click');
            if(target.classList.contains('like')){
                target.setAttribute('disabled', true)
                dislike.removeAttribute('disabled')
            } else {
                target.setAttribute('disabled', true)
                like.removeAttribute('disabled')
            }
           
        });
    })