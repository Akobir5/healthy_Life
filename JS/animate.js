let menu_home = document.querySelector('.menu_home')
let menu_box = document.querySelector('.menu_box')
let toggleBlock = document.querySelector('.toggleBlock')
let allHeaderItems = document.querySelectorAll('#header li')
let menu_Humburger = document.querySelector('.menu_Humburger')
let menu_home_box = document.querySelector('.menu_home_box')

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

let menu_link = [ 'Главная', 'Викимед', 'Блог', 'О нас', 'Отзывы', 'Почему Booking Health?', 'Вакансии', 'Контакты', 'English', 'Uzbek' ]

menu_Humburger.addEventListener('click', () => {
    let background_fixed = document.createElement('div')
    background_fixed.classList.add('background_fixed')
    document.body.appendChild(background_fixed)
    document.body.classList.add('body_fix')

    let response_menu = document.createElement('div')
    response_menu.classList.add('response_menu')
    background_fixed.appendChild(response_menu)
    let menu_home = document.createElement('div')
    menu_home.classList.add('menu_home')
    response_menu.appendChild(menu_home)
    let menu_home_box = document.createElement('div')
    menu_home_box.classList.add('menu_home_box')
    menu_home.appendChild(menu_home_box)
    let modal_header = document.createElement('div')
    modal_header.classList.add('modal_header')
    menu_home_box.appendChild(modal_header)
    modal_header.innerHTML =`<i class="fal fa-times"></i>`
    let modal_section = document.createElement('div')
    modal_section.classList.add('modal_section')
    menu_home_box.appendChild(modal_section)
    let ul = document.createElement('ul')
    for(l = 0; l < menu_link.length; l++) {
        let li = document.createElement('li')
        ul.appendChild(li)
        let a = document.createElement('a')
        li.appendChild(a)
        // let b = document.createElement('b')
        a.innerText = menu_link[l]
        // if(a.appendChild(b)) {
        //     a[0].appendChild(b)
        //     a[8].appendChild(b)
        //     a[9].appendChild(b)
        //     a.innerHTML = ' '
        //     b.innerHTML=  '<i class="fas fa-home-lg-alt"></i>'
        //     b.innerText = menu_link[l]
        // } else {
        //     a.innerText = menu_link[l]
        // }
        // modal_section.appendChild(ul)
        // let modal_footer = document.createElement('div')
        // modal_footer.classList.add('modal_footer')
        // menu_home_box.appendChild(modal_footer)

        // a[0].innerHTML = `<i class="fas fa-home-lg-alt"></i> `
    }

    modal_section.appendChild(ul)
    let modal_footer = document.createElement('div')
    modal_footer.classList.add('modal_footer')
    menu_home_box.appendChild(modal_footer)
    let button = document.createElement('button')
    button.classList.add('clear_menu')
    button.innerText = 'Закрыть'
    modal_footer.appendChild(button)

    // menu_home_box.classList.remove('.translate')
    // menu_home_box.classList.add('.translate_menu')
})

