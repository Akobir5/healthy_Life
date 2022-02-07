let menu_home = document.querySelector('.menu_home')
let menu_box = document.querySelector('.menu_box')
let toggleBlock = document.querySelector('.toggleBlock')
let allHeaderItems = document.querySelectorAll('#header li')

menu_home.addEventListener('click', () => {
    menu_box.classList.toggle('menu_box_check')
    toggleBlock.classList.toggle('menu_background')
})

toggleBlock.addEventListener('click', () => {
    menu_box.classList.remove('menu_box_check')
    toggleBlock.classList.remove('menu_background')
})

allHeaderItems.forEach(items => {
    items.addEventListener('click', () => {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
          } else { 
            document.selection.empty();
          }
    })
})

