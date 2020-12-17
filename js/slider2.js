"use strict"

/* Индекс слайда по умолчанию */
var slideIndex2 = 1;
showSlides2(slideIndex2);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide2() {
    showSlides2(slideIndex2 += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide2() {
    showSlides2(slideIndex2 -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide2(n) {
    showSlides2(slideIndex2 = n);
}

/* Основная функция слайдера */
function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("item2");
    if (n > slides2.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides2.length
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slideIndex2 - 1].style.display = "block";
}

