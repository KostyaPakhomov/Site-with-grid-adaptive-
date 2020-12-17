"use strict"

/* Индекс слайда по умолчанию */
var slideIndexRegBiz = 1;
showSlidesRegBiz(slideIndexRegBiz);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlideRegBiz() {
    showSlidesRegBiz(slideIndexRegBiz += 1);
}

/* Устанавливает текущий слайд */
function currentSlideRegBiz(n) {
    showSlidesRegBiz(slideIndexRegBiz = n);
}

/* Основная функция слайдера */
function showSlidesRegBiz(n) {
    var i;
    var slidesRegBiz = document.getElementsByClassName("listRegBiz");
    var dotsRegBiz = document.getElementsByClassName("slider-dots_itemRegBiz");
    if (n > slidesRegBiz.length) {
        slideIndexRegBiz = 1
    }
    if (n < 1) {
        slideIndexRegBiz = slidesRegBiz.length;
    }
    for (i = 0; i < slidesRegBiz.length; i++) {
        slidesRegBiz[i].style.visibility = "hidden";
    }
    for (i = 0; i < dotsRegBiz.length; i++) {
        dotsRegBiz[i].className = dotsRegBiz[i].className.replace(" active", "");
    }
    slidesRegBiz[slideIndexRegBiz - 1].style.visibility = "visible";
    dotsRegBiz[slideIndexRegBiz - 1].className += " active";
}

