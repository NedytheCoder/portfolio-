let body = document.querySelector("body")
let nav = document.querySelector("nav")
let hamburger = document.querySelector(".ham-menu")
let closeMenu = document.querySelector(".close-menu")
let ham = document.querySelector(".ham")
let closee = document.querySelector(".close")
let navList = document.querySelector(".navList")
let smallnavlist = document.querySelector("nav .navs .navList")
let navs = document.querySelectorAll("nav .navs .navList a")
let year = document.querySelector(".footer span.year")
let today = new Date().getFullYear()
let switchh = document.querySelector("label.switch")
let switchhInput = document.querySelector("label.switch input")
let navs_p = document.querySelector("nav p")
let navs_a = document.querySelectorAll("nav .navs a")
let home_p = document.querySelector(".home .content .intro p")
let image = document.querySelector(".home .content .image")
let span = document.querySelector(".home .skills span")
let abouth2 = document.querySelector(".about .content .writeup h2")
let aboutp = document.querySelector(".about .content .writeup p ")
let projecth3 = document.querySelectorAll(".projects .content .works .work .info h3")
let projectp = document.querySelectorAll(".projects .content .works .work .info p")
let conth2 = document.querySelector(".contact h2")
let cardshadow = document.querySelectorAll(".contact .content .card")
let cardh4 = document.querySelectorAll(".contact .content .card h4")
let cardp = document.querySelectorAll(".contact .content .card p")
let footer = document.querySelector(".footer")

hamburger.addEventListener("click", () => {
    navList.classList.add("show")
    hamburger.classList.add("none")
})

closeMenu.addEventListener("click", () => {
    navList.classList.remove("show")
    hamburger.classList.remove("none")
})

navs.forEach(nav => {
    nav.addEventListener("click", () => {
        navList.classList.remove("show")
        hamburger.classList.remove("none")
    })
})

year.innerHTML = today

switchh.addEventListener("click", () => {
    if (switchhInput.checked) {
        body.classList.add("dark")
        nav.classList.add("dark")
        hamburger.classList.add("dark")
        closeMenu.classList.add("dark")
        ham.classList.add("dark")
        closee.classList.add("dark")
        smallnavlist.classList.add("dark")
        navs_p.classList.add("dark")
        navs_a.forEach(nav => {
            nav.classList.add("dark")
        })
        home_p.classList.add("dark")
        image.classList.add("dark")
        span.classList.add("dark")
        abouth2.classList.add("dark")
        aboutp.classList.add("dark")
        projecth3.forEach(project => {
            project.classList.add("dark")
        })
        projectp.forEach(project => {
            project.classList.add("dark")
        })
        conth2.classList.add("dark")
        cardshadow.forEach(card => {    
            card.classList.add("dark")
        })
        cardh4.forEach(card => {
            card.classList.add("dark")
        })
        cardp.forEach(card => {
            card.classList.add("dark")
        })
        footer.classList.add("dark")
    }else{
        body.classList.remove("dark")
        nav.classList.remove("dark")
        hamburger.classList.remove("dark")
        closeMenu.classList.remove("dark")
        ham.classList.remove("dark")
        closee.classList.remove("dark")
        smallnavlist.classList.remove("dark")
        navs_p.classList.remove("dark")
        navs_a.forEach(nav => {
            nav.classList.remove("dark")
        })
        home_p.classList.remove("dark")
        image.classList.remove("dark")
        span.classList.remove("dark")
        abouth2.classList.remove("dark")
        aboutp.classList.remove("dark")
        projecth3.forEach(project => {
            project.classList.remove("dark")
        })
        projectp.forEach(project => {
            project.classList.remove("dark")
        })
        conth2.classList.remove("dark")
        cardshadow.forEach(card => {
            card.classList.remove("dark")
        })
        cardh4.forEach(card => {
            card.classList.remove("dark")
        })
        cardp.forEach(card => {
            card.classList.remove("dark")
        })
        footer.classList.remove("dark")
    }
})
