const burger = document.querySelector('.burger');
const search = document.querySelector('.header__search');
const nav = document.querySelector('.header__body');

const sideMenuItems = document.querySelector('.side-menu__items');
const sideMenuItem = document.querySelectorAll('.side-menu__item');
const menuItemHeader = document.querySelectorAll('.menu-item__header');

const socIcins = document.querySelectorAll('.footer__item');



isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('_mobile');
} else {
	body.classList.add('_PC');
}
// ------------------------------------------скрол header
window.addEventListener('scroll', function () {
	const header = document.querySelector('header');
	header.classList.toggle("header__sticky", window.scrollY > 0)

});

// ---------------------------------------burger

burger.onclick = clik;
function clik() {
	burger.classList.toggle('_active');
	nav.classList.toggle('_active');
	search.classList.toggle('_active');
}

// -------------------------------------------

// -------------------------------------------------
for (i = 0; i < sideMenuItem.length; i++) {
	let item = sideMenuItem[i];
	sideMenuItem[i].addEventListener('click', function (event) {
		if (event.target.closest('.menu-item__header')) {
			item.classList.toggle('_active');
		}
	})
}
// -----------------------------------------------------------------------
for (i = 0; i < socIcins.length; i++) {
	let item = socIcins[i];
	socIcins[i].addEventListener('click', function (event) {
		if (event.target.closest('.footer__item')) {
			item.classList.toggle('_active');
		}
	})
}
// -------------------------------------------------------------------------


