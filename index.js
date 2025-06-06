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
let lastScrollPosition = 0; // Armazena a posição da rolagem

verMaisButton.addEventListener('click', () => {
    const isVerMais = verMaisButton.textContent === 'Ver Mais';

    if (isVerMais) {
        // Armazenar a posição atual da rolagem
        lastScrollPosition = window.scrollY;
    }

    // Alternar a visibilidade dos elementos
    hiddenHaircuts.forEach(haircut => haircut.classList.toggle('hidden'));

    // Alterar o texto do botão
    verMaisButton.textContent = isVerMais ? 'Ver Menos' : 'Ver Mais';

    if (!isVerMais) {
        // Voltar para a posição armazenada ao recolher
        window.scrollTo({
            top: lastScrollPosition,
            behavior: 'instant', // Rolagem suave para uma boa experiência
        });
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Evita o comportamento padrão
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 180; // Ajuste conforme necessário
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Scroll suave
            });
        }
    });
});
