"use strict"

/* Индекс слайда по умолчанию */
var slideIndexRev = 1;
showSlidesRev(slideIndexRev);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideRev() {
    showSlidesRev(slideIndexRev += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlideRev() {
    showSlidesRev(slideIndexRev -= 1);
}

/* Устанавливает текущий слайд */
function currentSlideRev(n) {
    showSlidesRev(slideIndexRev = n);
}

/* Основная функция слайдера */
function showSlidesRev(n) {
    var i;
    var slidesRev = document.getElementsByClassName("rev");
    var dotsRev = document.getElementsByClassName("slider-dots_itemRev");
    // if (n > slidesRev.length-1) {
    //     slideIndexRev = 1
    // }
    if(document.body.clientWidth >= 800){
        if (n > slidesRev.length-1) {
            slideIndexRev = 1
        }
    }
    if(document.body.clientWidth < 800){
        if (n > slidesRev.length) {
            slideIndexRev = 1
        }
    }    if (n < 1) {
        slideIndexRev = slidesRev.length
    }
    for (i = 0; i < slidesRev.length; i++) {
        slidesRev[i].style.display = "none";
    }
    for (i = 0; i < dotsRev.length; i++) {
        dotsRev[i].className = dotsRev[i].className.replace(" active", "");
    }
    if(document.body.clientWidth >= 800){
    slidesRev[slideIndexRev - 1].style.display = "block";
    slidesRev[slideIndexRev].style.display = "block";
    }
    if(document.body.clientWidth < 800) {
        slidesRev[slideIndexRev - 1].style.display = "block";
    }
    dotsRev[slideIndexRev - 1].className += " active";
}

