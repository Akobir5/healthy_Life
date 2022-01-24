let headerH = document.querySelector('.headerH')
let menu_Icon = document.querySelectorAll('.menu_Icon')
let card = document.querySelectorAll('.card')

window.addEventListener('scroll', (e) => {
    if(scrollY > 150) {
        headerH.classList.add('headerScroll')
    } else {
        headerH.classList.remove('headerScroll')
    }
})

menu_Icon.forEach((item, index) => {
    item.addEventListener('click', () => {   
            card[index].classList.toggle('humburger_checked')
    })
})


