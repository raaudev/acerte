// Seleciona os elementos do menu e do botão
const menuBtn = document.querySelector('.menu-btn'); // Botão hambúrguer
const menu = document.querySelector('.menu-desktop'); // Menu
const menuLinks = document.querySelectorAll('.menu-desktop ul li a'); // Links do menu

// Alterna o menu ao clicar no botão
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active'); // Remove a classe 'active' para fechar o menu
    });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
        menu.classList.remove('active'); // Remove a classe 'active' para fechar o menu
    }
});