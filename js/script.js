// SLIDER
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 2250,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  // autoplay: {
  //   delay: 3000,
  // },
  slideClass: 'hero__slide',
  wrapperClass: 'hero__swiper-wrapper',
});

// TABS
let tabsBtn = document.querySelectorAll('.how__tab-btn');
let tabsItem = document.querySelectorAll('.how__content');

tabsBtn.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) { btn.classList.remove('how__tab-btn--active') });
    e.currentTarget.classList.add('how__tab-btn--active');

    tabsItem.forEach(function (element) { element.classList.remove('how__content--active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('how__content--active');
  });
});

// ACCORDION

new Accordion('.faq__list', {
  elementClass: 'faq__item',
  triggerClass: 'faq__btn',
  panelClass: 'faq__item-content',
  activeClass: 'faq__item--active',
});

// BURGER
let menu = document.querySelector('.header__nav');
let burger = document.querySelector('.burger');
let burgerClose = document.querySelector('.burger-close');
let menuLinks = document.querySelectorAll('.header__link');

burger.addEventListener('click', function () {
  menu.classList.add('header__nav--active');
  document.body.classList.add('stop-scroll');
});

burgerClose.addEventListener('click', function () {
  menu.classList.remove('header__nav--active');
  document.body.classList.remove('stop-scroll');
});

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    menu.classList.remove('header__nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

// SEARCH
let search = document.querySelector('.header__search');
let searchBtn = document.querySelector('.header__search-btn');
let searchCancel = document.querySelector('.header__search-cancel');

searchBtn.addEventListener('click', function () {
  search.classList.toggle('header__search--active');
});

searchCancel.addEventListener('click', function () {
  search.classList.remove('header__search--active');
});
