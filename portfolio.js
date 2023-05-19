let hamburger = document.querySelector(".ham-menu")
let closeMenu = document.querySelector(".close-menu")
let navList = document.querySelector(".navList")
let navs = document.querySelectorAll("nav .navs .navList a")
let year = document.querySelector(".footer span.year")
let today = new Date().getFullYear()

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