let headerH = document.querySelector('.headerH')
let menu_Icon = document.querySelectorAll('.ill_Name_Menu')
let card = document.querySelectorAll('.card')

// var hiddenElement = document.getElementById("box");
// var btn = document.querySelector('.btn');

// function handleButtonClick() {
//    hiddenElement.scrollIntoView({block: "center", behavior: "smooth"});
// }

// btn.addEventListener('click', handleButtonClick);

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

let link_json = 'http://localhost:3004/carusel_Comment'
fetch(link_json)
.then(response => response.json())
.then(data => getInfo(data))


