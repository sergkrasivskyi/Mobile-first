// получаем доступ доступ к классам кнопки и навигации:
// находим кнопку
const toggleNav = document.querySelector(".toggle-nav"),
  //  и находим само меню
  nav = document.querySelector(".nav"),
  body = document.querySelector("body");
// слушаем событие "клик" на кнопке
toggleNav.addEventListener("click", () => {
  // проверяем атрибут - открыто ли меню, если false (закрыто), то
  const exp = "true" === toggleNav.getAttribute("aria-expanded");
  // устанавливаем обратное значение
  toggleNav.setAttribute("aria-expanded", !exp);
  // включаем/ выключаем, через toggle, класс opened
  nav.classList.toggle("opened");
  body.classList.toggle("opened");
  // и меняем описание aria-label на соответствующее
  exp
    ? toggleNav.setAttribute("aria-label", "Открыть меню")
    : toggleNav.setAttribute("aria-label", "Закрыть меню");
});
// здесь мы выключаем выпадение меню (прячем), отслеживая изменение
// размера экрана body, чтобы меню не оставалось открытым, если кнопка
// закрыть не была нажата
const page = document.querySelector("body");
const observe = new ResizeObserver(() => {
  nav.classList.remove("opened");
	body.classList.remove("opened");
  toggleNav.setAttribute("aria-expanded", "false");
});
observe.observe(page);
