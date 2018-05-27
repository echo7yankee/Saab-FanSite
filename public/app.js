//Navbar links animation
(function styleLink() {
    var btn = document.getElementsByClassName('navbar__link');
    
    for (var i = 0; i < btn.length; i++) {
        btn[i].addEventListener('mouseover', function () {
            var span = this.nextElementSibling;
            span.style.width = 100 + '%';
        });
        btn[i].addEventListener('mouseout', function () {
            var span = this.nextElementSibling;
            span.style.width = 0 + '%';
        });
    }
}());

//Navbar Sticky animation
(function sticky(){
    var navbar = document.querySelector('.navbar-container');
    var navbarTop = navbar.scrollTop;
    var logo = document.querySelector('.navbar__container-logo');

    window.addEventListener('scroll', stickyNav);

    function stickyNav() {
        if (window.scrollY > navbarTop) {
            navbar.classList.add('animate-navbar');
            document.body.style.paddingTop = navbar.offsetHeight + 'px';
            logo.classList.add('navbar__logo-animate');
        } else {
            navbar.classList.remove('animate-navbar');
            document.body.style.paddingTop = 0;
            logo.classList.remove('navbar__logo-animate');
        }
    }
}());

//Signup Modal
(function signupModal(){
    //Open Modal
    var signUpBtn = document.getElementById('signup-btn');
    var signUpModal = document.querySelector('.signup-container');
    var closeModal = document.querySelector('.close-btn');
    var overlay = document.querySelector('.overlay');

    signUpBtn.addEventListener('click', function(){
        signUpModal.style.display = 'flex';
        overlay.classList.add('open');
    });

    closeModal.addEventListener('click', function(){
        signUpModal.style.display = 'none';
        overlay.classList.remove('open');
    });

    overlay.addEventListener('click', function(){
        overlay.classList.remove('open');
        signUpModal.style.display = 'none';
    })

    //CloseModal
}());

//Login Modal
(function loginModal(){
    var loginBtn = document.getElementById('login-btn');
    var loginModal = document.querySelector('.login-container');
    var closeModal = document.querySelectorAll('.close-btn');
    var overlay = document.querySelector('.overlay');
    for(var i = 0; i < closeModal.length; i++) {
        closeModal[i].addEventListener('click', function(){
            loginModal.style.display = 'none';
            overlay.classList.remove('open');
        });
    }
    loginBtn.addEventListener('click', function(){
        loginModal.style.display = 'flex';
        overlay.classList.add('open');
    })  
    overlay.addEventListener('click', function(){
        overlay.classList.remove('open');
        loginModal.style.display = 'none';
    })
}());

//Carousel
(function carousel(){
    var carousel = document.querySelector('.carousel');
    var inner = document.querySelector('.carousel__inner');
    var img = document.querySelectorAll('.carousel__img');
    var next = document.querySelector('.carousel__svg-2')
    var prev = document.querySelector('.carousel__svg-1')
    counter = 0;
    width = 168;

    for (var i = 0; i < img.length; i++);

    next.addEventListener('click', function(){
        counter++;

        if(counter >= img.length) {
            counter = 0;
        }
        slideCarousel();
    });

    prev.addEventListener('click', function(){
        counter--;

        if(counter < 0) {
            counter = img.length - 1;
        }
        slideCarousel();
    });

    function slideCarousel() {
        inner.style.left = - width * counter + 'rem';
    }

}());




































