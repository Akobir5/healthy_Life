let headerH = document.querySelector('.headerH')
let menu_Icon = document.querySelectorAll('.ill_Name_Menu')
let card = document.querySelectorAll('.card')
let info_little_control = document.querySelectorAll('.info_little_control')
let all_text_P = document.querySelector('.all_text_P')
let ul_Box = document.querySelector('.yearOfControl')
let big_span = document.querySelector('.big_span')
let text_discription = document.querySelector('.text_discription')
let carusel_Img1 = document.querySelector('.carusel_Img1')
let carusel_Img2 = document.querySelector('.carusel_Img2')
let carusel_Img3 = document.querySelector('.carusel_Img3')

// IMG Carusel Rtn
let swiperSlider = document.querySelectorAll('.carusel_Box_Control > div > .swiper-wrapper > .swiper-slide')
// VIDEO Carusel Rtn
let videoSwiper = document.querySelector('.video_swiper > .swiper > .swiper-wrapper')
// HOSPITAL carusel
let hospitalSwiper = document.querySelector('.hospital_buildings > .swiper > .swiper-wrapper')



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

let textInfo = [ "Healtthy Life™ – самый крупный и прозрачный медицинский туристический сервис в мире. На нашем сайте представлены более 250 клиник в      Австрии, Германии, Швейцарии, Индии, Коста-Рике, Турции, Таиланде, Польше, Венгрии, Израиле, ОАЭ, Южной Корее и Японии. До размещения на сайте клиника       проходит тщательную проверку по количеству успешных и безопасных операций, уровню оснащенности, комфортности пребывания и другим показателям."
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
        year_Text: 'Идея о создании Healthy Life™'
    }
]

for(let i = 0; i < textInfo.length; i++) {
    let text_Next = document.createElement('p')
    text_Next.innerText = `${textInfo[i]}`
    all_text_P.appendChild(text_Next)
                                
}


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

let imgCarusel1 = [
    {
        "nameAndCountry": "Хазем Махмуд Сами М., Египет",
        "img": "https://static.bookinghealth.com/uploads/reviews/9172-512_Hazem-Mahmoud-Samy-M.jpg",
        "info": "Хазем Махмуд Сами М., Египет, Август 2017, Многопрофильная клиника Превентикум",
        "location": "Диагностическая клиника Превентикум Эссен",   "id": 1
    },
    {
        "nameAndCountry": "Маргит Х., Дания",
        "img": "https://static.bookinghealth.com/uploads/reviews/4894-otr_patient-photo.jpg",
        "info": "Маргит Х., Дания, Июль 2020, Университетская клиника им. Гёте Франкфурт на Майне, Проф. Доктор мед. Томас Фогль",
        "location": "Диагностическая клиника Превентикум Эссен",  "id": 2
    },
    {
        "nameAndCountry": "Галина Г., Россия",
        "img": "https://static.bookinghealth.com/uploads/reviews/6846-foto-with-professor_512.jpg",
        "info": "Галина Г., Россия, Сентябрь 2017, Университетская клиника Бонн, Профессор, Доктор медицины Франк Г. Хольц.",
        "location": "Университетская клиника Бонн"
    }
]

let imgCarusel2 = [
    {
        "nameAndCountry": "Борис Т., США",
        "img": "https://static.bookinghealth.com/uploads/reviews/7768-92573_512.jpg",
        "info": "Борис Т., США, март 2017, Академическая клиника Швабинг при Университете Людвига Максимиллиана, Профессор, Доктор медицины Роберт Ритцел.",
        "location": "Клиника Швабинг Мюнхен"
    },
    {
        "nameAndCountry": "Ляззат Д., Казахстан",
        "img": "https://static.bookinghealth.com/uploads/reviews/5742-otr_2020-08-18_15-38-45.jpg",
        "info": "Ляззат Д., Казахстан, Август 2020, Клиника женского здоровья и ЭКО Jinepol Стамбул, Турция",
        "location": "Клиника женского здоровья и ЭКО Jinepol Стамбул"
    },
    {
        "nameAndCountry": "Фиона К., Ирландия",
        "img": "https://static.bookinghealth.com/uploads/reviews/2098-otr_Fiona-C.-1.jpg",
        "info": "Фиона К., Ирландия, Июль 2021, Клиника расширенной биологической медицины Франкфурт на Майне, Доктор мед. Герхард Зибенхюнер",
        "location": "Клиника расширенной биологической медицины Франкфурт на Майне"
    }
]

let imgCarusel3 = [
    {
        "nameAndCountry": "Хазем Махмуд Сами М., Египет",
        "img": "https://static.bookinghealth.com/uploads/reviews/9783-OTR_0-02-0a-bd5113241fce19930d51e550daf294bd12c05c67334e5bb33e6216d64e24268d_8bb08d0a.jpg",
        "info": "Хазем Махмуд Сами М., Египет, Август 2017, Многопрофильная клиника Превентикум",
        "location": "Диагностическая клиника Превентикум Эссен"
    },
    {
        "nameAndCountry": "Маргит Х., Дания",
        "img": "https://static.bookinghealth.com/uploads/reviews/4894-otr_patient-photo.jpg",
        "info": "Маргит Х., Дания, Июль 2020, Университетская клиника им. Гёте Франкфурт на Майне, Проф. Доктор мед. Томас Фогль",
        "location": "Диагностическая клиника Превентикум Эссен"
    },
    {
        "nameAndCountry": "Галина Г., Россия",
        "img": "https://static.bookinghealth.com/uploads/reviews/6846-foto-with-professor_512.jpg",
        "info": "Галина Г., Россия, Сентябрь 2017, Университетская клиника Бонн, Профессор, Доктор медицины Франк Г. Хольц.",
        "location": "Университетская клиника Бонн"
    }
]


let videoCarusel = [
    {
        "img_Video": "https://static.bookinghealth.com/uploads/reviews/videocovers/5a0bfb649d704.jpg",
        "link_Video": "https://www.youtube.com/embed/sTkf_TkOuVQ",
        "id": 1
    },
    {
        "img_Video": "https://static.bookinghealth.com/uploads/reviews/videocovers/cover6.jpg",
        "link_Video": "https://www.youtube.com/embed/6feHu0kZ2KI",
        "id": 2
    },
    {
        "img_Video": "https://static.bookinghealth.com/uploads/reviews/videocovers/cover9.jpg",
        "link_Video": "https://www.youtube.com/embed/t9nBDoIsX8U",
        "id": 3
    },
    {
        "img_Video": "https://static.bookinghealth.com/uploads/reviews/videocovers/cover10.jpg",
        "link_Video": "https://www.youtube.com/embed/t9nBDoIsX8U",
        "id": 4
    },
    {
        "img_Video": "https://static.bookinghealth.com/uploads/reviews/videocovers/cover11.jpg",
        "link_Video": "https://www.youtube.com/embed/U0sLnFYfvPE",
        "id": 5
    },
    {
        "img_Video": "https://static.bookinghealth.com/uploads/reviews/videocovers/cover12.jpg",
        "link_Video": "https://www.youtube.com/embed/nVVPuauxLpc",
        "id": 6
    },
    {
        "img_Video": "https://static.bookinghealth.com/uploads/reviews/videocovers/5a0bf62eb6c80.jpg",
        "link_Video": "https://www.youtube.com/embed/U_C03ujVhis",
        "id": 7
    },
    {
        "img_Video": "https://static.bookinghealth.com/uploads/reviews/videocovers/5a0eacd78eccb.jpg",
        "link_Video": "https://www.youtube.com/embed/akwT5ywRVn8",
        "id": 8
    },
    {
        "img_Video": "https://static.bookinghealth.com/uploads/reviews/videocovers/cover7.jpg",
        "link_Video": "https://www.youtube.com/embed/C7nnVBkUoHk",
        "id": 9
    }
]


let caruselClinic1 = [
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/600045ab0e114.jpg",
        "name_Building": "Университетская клиника Тюбингена"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/600188f5cffb3.jpg",
        "name_Building": "Университетская клиника Дюссельдорф"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/5ff71a94092b7.jpg",
        "name_Building": "Университетская клиника Ульма"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/60018b988ab2a.jpg",
        "name_Building": "Университетская клиника им. Гёте Франкфурт на Майне"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/600042586ac6f.jpg",
        "name_Building": "Университетская клиника Гамбург-Эппендорф"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/600049903f041.jpg",
        "name_Building": "Университетская клиника Мюнхенского университета им."
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/5ff71d3fe387b.jpg",
        "name_Building": "Университетская клиника Вюрцбурга"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/60018cf310417.jpg",
        "name_Building": "Университетская клиника Шарите Берлин"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/600042586ac6f.jpg",
        "name_Building": "Университетская клиника Гамбург-Эппендорф"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/600049903f041.jpg",
        "name_Building": "Университетская клиника Мюнхенского университета им."
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/5ff71d3fe387b.jpg",
        "name_Building": "Университетская клиника Вюрцбурга"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/60018cf310417.jpg",
        "name_Building": "Университетская клиника Шарите Берлин"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/5ff7190c69573.jpg",
        "name_Building": "Университетская клиника Йена"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/600040a7d28a6.jpg",
        "name_Building": "Высшая медицинская школа Ганновера (MHH)"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/600046ad76a18.jpg",
        "name_Building": "Университетская клиника Мюнстер"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/6005637e586af.jpg",
        "name_Building": "Университетская клиника Рехтс дер Изар Мюнхен"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/60018f85a561b.jpg",
        "name_Building": "Университетская клиника Гейдельберг"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/6000418484004.jpg",
        "name_Building": "Университетская клиника Галле (Заале)"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/5ff834cf5a337.jpg",
        "name_Building": "Клиника Гелиос Берлин-Бух"
    },
    {
        "img_Building": "https://static.bookinghealth.com/uploads/clinics/5ffc5d682dca4.jpg",
        "name_Building": "Клиника Вивантес Каульсдорф Берлин ‹›НАЙТИ КЛИНИКУ"
    }
]

    for(let a = 0; a <imgCarusel1.length; a++) {
        let card_Carusel = document.createElement('div')
        card_Carusel.classList.add('card_Carusel')
        card_Carusel.innerHTML = `
        <div class="rtn">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
        `
        let carusel_control = document.createElement('div')
        carusel_control.classList.add('carusel_control')
        let small = document.createElement('small')
        small.innerText = imgCarusel1[a].nameAndCountry
        carusel_control.appendChild(small)
        let textP = document.createElement('p')
        let caruselImg = document.createElement('img')
        caruselImg.setAttribute('src', imgCarusel1[a].img)
        textP.appendChild(caruselImg)
        let span = document.createElement('span')
        span.innerText = imgCarusel1[a].info
        textP.appendChild(span)
        carusel_control.appendChild(textP)
        let textCenter = document.createElement('div')
        textCenter.classList.add('text-center')
        let linkA = document.createElement('a')
        linkA.innerText = imgCarusel1[a].location
        textCenter.appendChild(linkA)
        card_Carusel.appendChild(carusel_control)
        card_Carusel.appendChild(textCenter)
        swiperSlider[0].appendChild(card_Carusel)
    }
    

    for(let b = 0; b <imgCarusel2.length; b++) {
        let card_Carusel1 = document.createElement('div')
        card_Carusel1.classList.add('card_Carusel')
        card_Carusel1.innerHTML = `
        <div class="rtn">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
        `
        let carusel_control1 = document.createElement('div')
        carusel_control1.classList.add('carusel_control')
        let small = document.createElement('small')
        small.innerText = imgCarusel2[b].nameAndCountry
        carusel_control1.appendChild(small)
        let textP = document.createElement('p')
        let caruselImg = document.createElement('img')
        caruselImg.setAttribute('src', imgCarusel2[b].img)
        textP.appendChild(caruselImg)
        let span = document.createElement('span')
        span.innerText = imgCarusel2[b].info
        textP.appendChild(span)
        carusel_control1.appendChild(textP)
        let textCenter = document.createElement('div')
        textCenter.classList.add('text-center')
        let linkA = document.createElement('a')
        linkA.innerText = imgCarusel2[b].location
        textCenter.appendChild(linkA)
        card_Carusel1.appendChild(carusel_control1)
        card_Carusel1.appendChild(textCenter)
        swiperSlider[1].appendChild(card_Carusel1)
    }
    

    for(let b = 0; b <imgCarusel3.length; b++) {
        let card_Carusel1 = document.createElement('div')
        card_Carusel1.classList.add('card_Carusel')
        card_Carusel1.innerHTML = `
        <div class="rtn">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
        `
        let carusel_control1 = document.createElement('div')
        carusel_control1.classList.add('carusel_control')
        let small = document.createElement('small')
        small.innerText = imgCarusel3[b].nameAndCountry
        carusel_control1.appendChild(small)
        let textP = document.createElement('p')
        let caruselImg = document.createElement('img')
        caruselImg.setAttribute('src', imgCarusel3[b].img)
        textP.appendChild(caruselImg)
        let span = document.createElement('span')
        span.innerText = imgCarusel3[b].info
        textP.appendChild(span)
        carusel_control1.appendChild(textP)
        let textCenter = document.createElement('div')
        textCenter.classList.add('text-center')
        let linkA = document.createElement('a')
        linkA.innerText = imgCarusel3[b].location
        textCenter.appendChild(linkA)
        card_Carusel1.appendChild(carusel_control1)
        card_Carusel1.appendChild(textCenter)
        swiperSlider[2].appendChild(card_Carusel1)
    }

    //swiper first

    let swiper = new Swiper(".nextSwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    
      for(let v = 0; v < videoCarusel.length; v++) {
          let videoSlide = document.createElement('div')
          videoSlide.classList.add('swiper-slide')
          let boxOfVideo = document.createElement('div')
          boxOfVideo.classList.add('boxOfVideo')
          videoSlide.appendChild(boxOfVideo)
          let videoImg = document.createElement('img')
          boxOfVideo.appendChild(videoImg)
          videoImg.setAttribute('src', videoCarusel[v].img_Video)
          let iframe = document.createElement('iframe')
          boxOfVideo.appendChild(iframe)
          iframe.setAttribute('src', videoCarusel[v].link_Video)
          iframe.setAttribute('title', 'YouTube video player')
          iframe.setAttribute('frameborder', '0')
          iframe.setAttribute('autoplay', " ")
          videoSwiper.appendChild(videoSlide)
      }

      let checkVideo = document.querySelectorAll('.boxOfVideo img')

      checkVideo.forEach((item, index) => {
          item.addEventListener('click', () => {
            checkVideo[index].style.display = 'none'

            let iframeNext = document.querySelectorAll('.boxOfVideo iframe')
            iframeNext.forEach(autoPlay => {
                autoPlay.style.display = 'block'
            })
          })
      })

      //hospitalSwiper

      for (let k = 0; k < caruselClinic1.length; k++) {
        let hospitalSlide = document.createElement('div')
        hospitalSlide.classList.add('swiper-slide')
        let hospital_little = document.createElement('div')
        hospital_little.classList.add('hospital_little')
        hospitalSlide.appendChild(hospital_little)
        let imgLink = document.createElement('a')
        //link
        imgLink.setAttribute('href', " ")
        hospital_little.appendChild(imgLink)
        let img = document.createElement('img')
        img.setAttribute('src', caruselClinic1[k].img_Building)
        imgLink.appendChild(img)
        let title_building = document.createElement('div')
        title_building.classList.add('title_building')
        hospital_little.appendChild(title_building)
        let text = document.createElement('a')
        // LINK
        text.setAttribute('href', " ")
        text.innerHTML = caruselClinic1[k].name_Building
        title_building.appendChild(text)
        hospitalSlide.appendChild(hospital_little)
        hospitalSwiper.appendChild(hospitalSlide)

      }


      // Swiper second

      let swiper1 = new Swiper(".newSwiper", {
        // slidesPerView: 4,
        // spaceBetween: 30,
        // slidesPerGroup: 4,
        // loop: true,
        // loopFillGroupWithBlank: true,
        // pagination: {
        //   el: ".swiper-pagination",
        //   clickable: true,
        // },

        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 4,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            550: {
                slidesPerView: 2,
            },
            800: {
                slidesPerView: 3,
            },
            1150: {
                slidesPerView:4,
            }
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }
      });

