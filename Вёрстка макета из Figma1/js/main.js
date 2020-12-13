(function () {
    const header = document.querySelector('.header'); 
    const top = document.querySelector('.header__wrapper')

    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            top.classList.add('header__wrapper_active');
        }   else {
            header.classList.remove('header_active');
            top.classList.remove('header__wrapper_active');
        }
    };
}());