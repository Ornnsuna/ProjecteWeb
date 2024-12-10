window.addEventListener('DOMContentLoaded', event => {

    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('.navbar');
        if (!navbarCollapsible) {
            return;
        }
        
            navbarCollapsible.classList.add('navbar-shrink');

    };

    navbarShrink();

    const toggler = document.getElementById('navbarToggler');
    const navbarResponsive = document.getElementById('navbarResponsive');

    toggler.addEventListener('click', () => {
        navbarResponsive.classList.toggle('show');
    });

});
