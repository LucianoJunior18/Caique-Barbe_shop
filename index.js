let navBar = document.querySelector("#header")


document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
        navBar.classList.add("rolar")
    } else {
        navBar.classList.remove("rolar")
    }
})

// Menu Mobile
let btnMenu = document.getElementById("btn-menu")
let menuMbl = document.getElementById("menu-mobile-div")
let overlay = document.getElementById("overlay-menu")

btnMenu.addEventListener('click', () => {
    menuMbl.classList.add("abrir-menu")
})

menuMbl.addEventListener('click', () => {
    menuMbl.classList.remove("abrir-menu")
})

overlay.addEventListener('click', () => {
    menuMbl.classList.remove("abrir-menu")
})


const verMaisButton = document.getElementById('verMais');
const hiddenHaircuts = document.querySelectorAll('.hidden');

verMaisButton.addEventListener('click', () => {
    hiddenHaircuts.forEach(haircut => haircut.classList.toggle('hidden'));
    verMaisButton.textContent =
        verMaisButton.textContent === 'Ver Mais' ? 'Ver Menos' : 'Ver Mais';
});