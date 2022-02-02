let headerH = document.querySelector('.headerH')
let menu_Icon = document.querySelectorAll('.ill_Name_Menu')
let card = document.querySelectorAll('.card')
let info_little_control = document.querySelectorAll('.info_little_control')
let all_text_P = document.querySelector('.all_text_P')
let ul_Box = document.querySelector('.yearOfControl')
let big_span = document.querySelector('.big_span')
let text_discription = document.querySelector('.text_discription')
// let little_Span = document.querySelector('.little_Span')

// IMG Carusel Rtn

let imgBtnRight = document.querySelector('.imgBtnRight')
let imgBtnLeft = document.querySelector('.imgBtnLeft')
let overflow_Block = document.querySelector('.overflow_Block')

// IMG Carusel Rtn

// VIDEO Carusel Rtn

let videoBtnRight = document.querySelector('.videoBtnRight')
let videoBtnLeft = document.querySelector('.videoBtnLeft')
let video_owerflov = document.querySelector('.video_owerflov')

// VIDEO Carusel Rtn

text_discription.classList.add('text_discription_before')

big_span.addEventListener('click', () => {
    text_discription.classList.toggle('text_Non_discription')

    if(text_discription.classList.contains('text_Non_discription')){
        text_discription.classList.remove('text_discription_before')
        big_span.innerText = "Свернуть"
    } else {
        big_span.innerText = "Читать далее"
        text_discription.classList.add('text_discription_before')
    }


})


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

let textInfo = [ "Booking Health™ – самый крупный и прозрачный медицинский туристический сервис в мире. На нашем сайте представлены более 250 клиник в      Австрии, Германии, Швейцарии, Индии, Коста-Рике, Турции, Таиланде, Польше, Венгрии, Израиле, ОАЭ, Южной Корее и Японии. До размещения на сайте клиника       проходит тщательную проверку по количеству успешных и безопасных операций, уровню оснащенности, комфортности пребывания и другим показателям."
        , "На сайте представлены свыше 700 000 медицинских программ на выбор клиента. Это программы базового и расширенного профилактического обследования (чек ап), индивидуальная диагностика в сложных клинических случаях, амбулаторное и стационарное лечение, реабилитация и СПА-отдых."
        , "Наша цель – предоставить возможность пациентам из любой точки мира самостоятельно в режиме онлайн подобрать клинику, которая предлагает оптимальную для них медицинскую программу, видеть стоимость этой программы и заказать ее по лучшей цене. Для принятия наиболее выгодного для себя решения пациент и его родственники могут детально изучить информацию о сертификатах клиники, достижениях лечащего врача, методиках лечения и стоимости услуг."
        ,  "При выборе между несколькими ведущими медицинскими учреждениями пациент может воспользоваться профессиональным советом наших врачей. Благодаря помощи медицинских специалистов Booking Health™ более 73 000 пациентов прошли необходимое лечение, включая инновационные методики, недоступные в их родной стране."
        , "Мы заботимся об удобстве и спокойствии пациентов. После выбора медицинской программы мы помогаем с получением визы для пациента и сопровождающего лица, переводом медицинских документов, перелетом и проживанием, общением с иностранным врачом через переводчика, контролем стоимости медицинских услуг и бытовыми моментами. Наши пациенты застрахованы от осложнений во время лечения на сумму 200 000 €."
        ,"Компания Booking Health™ – единственный в мире оператор медицинского туризма, качество работы которого подтверждено престижным международным сертификатом ISO 9001:2015 в сфере лечения иностранных пациентов. Мы оказываем помощь пациентам из 75 стран, общаясь с ними на их родном языке."
        ,"Наша миссия – внести прозрачность в ценообразование и качество на рынке медицинского туризма, и предоставить пациентам из любой страны возможность комфортно пройти необходимое лечение за рубежом."
        
]


let year_Info = [
    {
        year: '2020',
        year_Text: 'Создание MHS Academy - обучающей и сертификационной организации, которая стимулирует клиники к внедрению и поддержанию общепризнанных мировых стандартов гигиены и качества'
    },
    {
        year: '2019',
        year_Text: 'Развитие франчайзинговых сетей, создание агентств при клиниках'
    },
    {
        year: '2018',
        year_Text: 'Создание первых региональных агентств на основании договоров франшизы'
    },
    {
        year: '2017',
        year_Text: 'Получение первого в мире международного сертификата ISO 9001 в области организации лечения пациентов по всему миру'
    },
    {
        year: '2016',
        year_Text: 'Более 250 клиник в Австрии, Германии, Швейцарии, Индии, Коста Рики, Турции, Таиланда, Польши, Венгрии, Израиля, ОАЕ, Южной Кореи, Японии и 700 000 вариантов медицинского лечения и 53 000 пациентов, получивших медицинскую поддержку'
    },
    {
        year: '2015',
        year_Text: 'Подписаны прямые договора с первыми 100 клиниками в Европе'
    },
    {
        year: '2014',
        year_Text: 'Компания Booking Health GmbH была зарегистрирована'
    },
    {
        year: '2013',
        year_Text: 'Первая в мире медицинская туристическая страховка была зарегистрирована'
    },
    {
        year: '2012',
        year_Text: 'К проекту присоединились врачи и медицинские волонтеры'
    },
    {
        year: '2011',
        year_Text: 'Идея о создании Booking Health™'
    }
]

for(let i = 0; i < textInfo.length; i++) {
    let text_Next = document.createElement('p')
    text_Next.innerText = `${textInfo[i]}`
    all_text_P.appendChild(text_Next)
                                
}

// text_Next[7].classList.add('bold_Text')

for(let x = 0; x < year_Info.length; x++) {
    let li_Of_Ul = document.createElement('li')
    let year_Num = document.createElement('div')
    year_Num.innerText = `${year_Info[x].year}`
    let year_Text_Box  = document.createElement('div')
    year_Text_Box.innerText = `${year_Info[x].year_Text}`
    li_Of_Ul.appendChild(year_Num)
    li_Of_Ul.appendChild(year_Text_Box) 
    ul_Box.appendChild(li_Of_Ul)
}

let link_json = 'http://localhost:3004/carusel_Comment'
fetch(link_json)
.then(response => response.json())
.then(data => getInfo(data))

let i = 0

function createSliderElement (nameAndCountry, img, info, location) {
    let card_Carusel = document.createElement('div')
    card_Carusel.classList.add('card_Carusel')
    let carusel_control = document.createElement('div')
    carusel_control.classList.add('carusel_control')
    let small = document.createElement('small')
    small.innerText = nameAndCountry
    carusel_control.appendChild(small)
    let textP = document.createElement('p')
    let caruselImg = document.createElement('img')
    caruselImg.setAttribute('src', img)
    textP.appendChild(caruselImg)
    let span = document.createElement('span')
    span.innerText = info
    textP.appendChild(span)
    carusel_control.appendChild(textP)
    let textCenter = document.createElement('div')
    textCenter.classList.add('text-center')
    let linkA = document.createElement('a')
    linkA.innerText = location
    textCenter.appendChild(linkA)
    card_Carusel.appendChild(carusel_control)
    card_Carusel.appendChild(textCenter)
}

function getInfo(data) {
    console.log(data[0])

    let sliderInfo =  data.map(item => item)
    console.log(sliderInfo);

}


    
    // for(let z = 0; z < 4; z++){
    //     let carusel_Img = document.createElement('div')
    //     carusel_Img.classList.add('carusel_Img')
    //     carusel_Img.appendChild(card_Carusel)
    //     overflow_Block.appendChild(card_Carusel)
    // }

let menu_home = document.querySelector('.menu_home')

menu_home.addEventListener('click', () => {
    let background_fixed = document.createElement('div')
    background_fixed.classList.toggle('background_fixed')
    document.body.appendChild(background_fixed)
})
