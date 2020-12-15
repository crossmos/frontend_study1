// Header

(function () {
    const header = document.querySelector('.header');
    const top = document.querySelector('.header__wrapper')

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            top.classList.add('header__wrapper_active');
        } else {
            header.classList.remove('header_active');
            top.classList.remove('header__wrapper_active');
        }
    };
}());



// Burger

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav-close');
    const headerLink = document.querySelectorAll('.header__link');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });

    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    });

    if (window.innerWidth < 768) {
        for (let i = 0; i < headerLink.length; i += 1) {
            headerLink[i].addEventListener('click', () => {
                menu.classList.remove('header__nav-active');
            });
        }
    }
}());



// Scroll to anchors

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight = document.querySelector('.header').clientHeight + 30;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;

        const ease = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };

        const animation = function (currentTime) {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());