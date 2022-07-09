// получаем доступ доступ к классам кнопки и навигации
const toggleNav = document.querySelector('.toggle-nav'),
nav = document.querySelector('.nav');
toggleNav.addEventListener('click', () => {
	const exp = 'true' === toggleNav.getAttribute('aria-expanded');
	toggleNav.setAttribute('aria-expanded', !exp);
	nav.classList.toggle('opened'); 

	exp ? toggleNav.setAttribute('aria-label', 'Открыть меню')
			: toggleNav.setAttribute('aria-label', 'Закрыть меню')

})