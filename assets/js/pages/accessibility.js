window.addEventListener('scroll', (e) => {
    var scroll = window.scrollY;
    const navbar = document.querySelector('.collapsable-navbar')
    if(scroll >= 150){
        console.log('hide');
        navbar.classList.add('_1x6d8808');
        navbar.classList.remove('_1lovwbn');
    }else {
        console.log('show');
        navbar.classList.add('_1lovwbn');
        navbar.classList.remove('_1x6d8808');
    }
    // document.getElementById("scroll_position").textContent=scroll;
})
