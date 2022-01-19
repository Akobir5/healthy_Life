let headerH = document.querySelector('.headerH')



window.addEventListener('scroll', (e) => {
    if(scrollY > 150) {
        headerH.classList.add('headerScroll')
    } else {
        headerH.classList.remove('headerScroll')
    }
})