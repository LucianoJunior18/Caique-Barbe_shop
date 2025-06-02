let navBar = document.querySelector("#header")

document.addEventListener("scroll", () => {
    let scrollTop = window.scrollY;

    if (scrollTop > 0) {
        navBar.classList.add("rolar")
    } else {
        navBar.classList.remove("rolar")
    }
})


const verMaisButton = document.getElementById('verMais');
const hiddenHaircuts = document.querySelectorAll('.hidden');

verMaisButton.addEventListener('click', () => {
    hiddenHaircuts.forEach(haircut => haircut.classList.toggle('hidden'));
    verMaisButton.textContent =
        verMaisButton.textContent === 'Ver Mais' ? 'Ver Menos' : 'Ver Mais';
});