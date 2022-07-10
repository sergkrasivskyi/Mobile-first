// получаем доступ доступ к классам кнопки и навигации
const toggleNav = document.querySelector(".toggle-nav"),
  nav = document.querySelector(".nav");
toggleNav.addEventListener("click", () => {
  const exp = "true" === toggleNav.getAttribute("aria-expanded");
  toggleNav.setAttribute("aria-expanded", !exp);
  nav.classList.toggle("opened");

  exp
    ? toggleNav.setAttribute("aria-label", "Открыть меню")
    : toggleNav.setAttribute("aria-label", "Закрыть меню");
});
const page = document.querySelector(".container-wide");
const pageWidth = page.style.width;
console.log(pageWidth);
const observe = new ResizeObserver(entries => {
  if (entries >= 600) {
    toggleNav.setAttribute("aria-expanded", "false");
    nav.classList.remove("opened");
    // nav.classList.toggle("closed");
  }
});
// toggleNav.setAttribute("aria-expanded", false);
// console.log(entries);

//   if (pageWidth >= 600) {
//     toggleNav.setAttribute("aria-expanded", "false");
// 		nav.classList.remove("opened");
// 		nav.classList.toggle("closed");
//   }
// });
// toggleNav.setAttribute("aria-expanded", exp);
observe.observe(page);
