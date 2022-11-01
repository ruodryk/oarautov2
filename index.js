const botaoMenu = document.querySelector(".cabecalho__menu");
const menu = document.querySelector(".menu-lateral");
const overLay = document.querySelector(".overlay");

botaoMenu.addEventListener("click", () => {
  menu.classList.toggle("menu-lateral--ativo");
  overLay.classList.toggle("hidden");
});

overLay.addEventListener("click", function () {
  menu.classList.toggle("menu-lateral--ativo");
  overLay.classList.toggle("hidden");
});
