"use strict"

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}



function writeOnSlide() {
    var mainText = document.getElementById("slideText_main");
    var text = document.getElementById("slideText");
    var btnSlider = document.getElementById("btn_for_slide");

    switch (slideIndex) {
        case 1:
            mainText.textContent = "Взыскание дебиторской задолженности";
            text.textContent = "Индивидуальный подход и нацеленность на достижение результата";
            btnSlider.onclick = function(){
                window.location.href='index.html';
            }
            break;
        case 2:
            mainText.textContent = "Юридический аутсорсинг";
            text.textContent = "Гарантия своевременности и качества услуг";
            btnSlider.onclick = function(){
                window.location.href='index.html';
            }

            break;
        case 3:
            mainText.innerHTML = "Юридическая консультация";
            text.innerHTML = "Детальные разъяснения вопросов по ведению бизнеса от профессионалов";
            btnSlider.onclick = function(){
                window.location.href='index.html';
            }

            break;
        case 4:
            mainText.innerHTML = "Ликвидация предприятия";
            text.innerHTML = "Эффективное решение сложных задач";
            btnSlider.onclick = function(){
                window.location.href='index.html';
            }

            break;
        case 5:
            mainText.innerHTML = "Регистрация ООО";
            text.innerHTML = "Гарантируем минимальные сроки регистрации под ключ";
            btnSlider.onclick = function(){
                window.location.href='index.html';
            }

            break;
    }
}
writeOnSlide();
