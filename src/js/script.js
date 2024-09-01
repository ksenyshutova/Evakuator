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

block.forEach((button) => {
    button.addEventListener('click', (e) => {
    e.preventDefault();
    main.classList.toggle('visually-hidden');
    announcement.classList.toggle('visually-hidden');
});
});

