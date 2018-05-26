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

//navbar

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






































/*var navbar = document.querySelector('.navbar-container');
var navTop = navbar.offsetTop;
console.log(navTop);

console.log(window.scrollY);
window.addEventListener('scroll',stickyNav);

function stickyNav() {
    if (window.scrollY > navTop) {
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
        document.body.classList.add('sticky-nav')
    } else if (window.scrollY < navTop){
        document.body.style.paddingTop = 0;
        document.body.classList.remove('sticky-nav');
    }
}*/

//navbar dos 

/*var navbar = document.querySelector('.navbar-container');
var navTop = navbar.scrollTop;
console.log(navTop);

console.log(window.scrollY);
window.addEventListener('scroll', function(){

    if (window.scrollY > navTop) {
        document.body.classList.add('sticky-nav');
        document.body.style.paddingTop = navbar.offsetHeight + 'px';
    } else {
        document.body.classList.remove('sticky-nav');
        document.body.style.paddingTop = 0;
    }

});


//menu dos

var menuDos = document.querySelector('.menu-burger');
var lineUno = document.querySelector('.line-uno');
var lineDos = document.querySelector('.line-dos');

menuDos.addEventListener('click',function(){

    lineUno.classList.toggle('line-dos');

});


function scroll(){

    var testImg = document.querySelector('.img-container');
    var yposition = window.pageYOffset;

    if (yposition > 600) {
        testImg.classList.add('active');
    } else if (yposition < 599) {
        testImg.classList.remove('active');
    }
   
    console.log(yposition);

}

window.addEventListener('scroll', scroll); */