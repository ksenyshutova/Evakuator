'use strict';

/**
  Перемещение в начало через кнопку
 */

let button = document.querySelector('.nav__button');

button.addEventListener('click', (e) => { // Перемещение к header
    e.preventDefault();
    document.querySelector('.header__inner').scrollIntoView({ behavior: 'smooth' });
});

/**
Работа с последним блоком
*/

let price = document.querySelector('.result__button_price');
let order = document.querySelector('.result__button_order');
let priceSection = document.querySelector('.result_price');
let orderSection = document.querySelector('.result_order');

price.addEventListener('click', (e) => {
    e.preventDefault();
    order.classList.remove('active');
    price.classList.add('active');
    orderSection.classList.remove('active');
    priceSection.classList.add('active');
});

order.addEventListener('click', (e) => {
    e.preventDefault();
    price.classList.remove('active');
    order.classList.add('active');
    priceSection.classList.remove('active');
    orderSection.classList.add('active');
});

/**
  Открытие блока "Добавить объявление" и его закрытие
 */

let block = document.querySelectorAll('.header__button');
let main = document.querySelector('.main');
let announcement = document.querySelector('.section__announcement');
let headerLink = document.querySelectorAll('.header__menu-link');
let footerLink = document.querySelectorAll('.footer__menu-link');

block.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        main.classList.add('visually-hidden');
        announcement.classList.remove('visually-hidden');
    });
});

headerLink.forEach((link) => {
    link.addEventListener('click', (e) => { // закрытие блока при нажатии блока header
        e.preventDefault();
        main.classList.remove('visually-hidden');
        announcement.classList.add('visually-hidden');
    });
});

footerLink.forEach((link) => {
    link.addEventListener('click', (e) => { // закрытие блока при нажатии блока footer 
        e.preventDefault();
        main.classList.remove('visually-hidden');
        announcement.classList.add('visually-hidden');
    });
});

/**
  Перемещение к нужному блоку
 */

let project = document.querySelector('.header__menu-link_project');
let contact = document.querySelector('.header__menu-link_contact');
let call = document.querySelector('.footer__menu-link_call');
let truck = document.querySelector('.footer__menu-link_truck');
let help = document.querySelector('.footer__menu-link_help');
let cost = document.querySelector('.footer__menu-link_cost');

project.addEventListener('click', (e) => { // перемещение к блоку "о проекте"
    e.preventDefault();
    document.querySelector('.section__advantages').scrollIntoView({ behavior: 'smooth' });
});

contact.addEventListener('click', (e) => { // перемещение к блоку "контакты"
    e.preventDefault();
    document.querySelector('.service-card__title_contact').scrollIntoView({ behavior: 'smooth' });
});

call.addEventListener('click', (e) => { // перемещение к блоку "вызов эвакуатора"
    e.preventDefault();
    document.querySelector('.section__hero').scrollIntoView({ behavior: 'smooth' });
});

truck.addEventListener('click', (e) => { // перемещение к блоку "добавить эвакуатор"
    e.preventDefault();
    document.querySelector('.section__information').scrollIntoView({ behavior: 'smooth' });
});

help.addEventListener('click', (e) => { // перемещение к блоку "помощь"
    e.preventDefault();
    document.querySelector('.section__advantages').scrollIntoView({ behavior: 'smooth' });
});

cost.addEventListener('click', (e) => { // перемещение к блоку "цены"
    e.preventDefault();
    document.querySelector('.section__result').scrollIntoView({ behavior: 'smooth' });
});
