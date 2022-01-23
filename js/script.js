//ibg
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
} ibg();
//menu burger
$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active-burger');
        $('body').toggleClass('lock');
    });
});
//about-menu open
let aboutbtn = document.querySelector(".about-btn");
let about = document.querySelector(".about-us");
let close = document.querySelector(".about-us__close");
let body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");
console.log(lockPadding)
let unlock = true;

const timeout = 300;
function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

function about_open() {
    about.classList.add("about-us-active");
    aboutbtn.classList.add("about-btn-hidden")
    bodyLock();
    // const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    // body.style.paddingRight = lockPaddingValue;
    // body.classList.add("lock");
}
aboutbtn.onclick = about_open;
//about-menu close
function about_close() {
    about.classList.remove("about-us-active");
    //body.style.paddingRight = '0px';
    //body.classList.remove('lock');
    aboutbtn.classList.remove("about-btn-hidden")
    bodyUnLock();
}
close.onclick = about_close;

///----------------------------------------------------------------------------------

(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {
        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();
(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {
        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

