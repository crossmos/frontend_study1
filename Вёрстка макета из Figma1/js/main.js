(function () {
    const header = document.querySelector('.header'); 
    const top = document.querySelector('.header__wrapper')
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
            top.classList.add('header__wrapper_active');
        }
    };
}());