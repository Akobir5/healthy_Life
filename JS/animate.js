let menu_home = document.querySelector('.menu_home')
let menu_box = document.querySelector('.menu_box')

menu_home.addEventListener('click', (e) => {
    menu_box.classList.toggle('menu_box_check')

    console.log(e);
})

// window.addEventListener('click', () => {
//     if(menu_box.classList.contains('menu_box_check')) {
//         menu_box.classList.remove('menu_box_check')
//     } else {
//         menu_box.classList.add('menu_box_check')
//     }
// })

