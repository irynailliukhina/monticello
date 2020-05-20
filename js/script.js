$('.js-menu-toggler').click(function () {
    $(this).toggleClass('block-menu__toggler--open');
    $('.js-menu').toggleClass('menu--open');
});


$('.full-slider').slick({
    vertical: true,
    speed: 300,
    arrows: false,
    dots: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                dots: false,
                verticalSwiping: false,

            }
        },

    ],
});

$('.slider-news').slick({
    speed: 300,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots--hor",
    prevArrow: "<div class='prev'></div>",
    nextArrow: "<div class='next'></div>",
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                arrows: false,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                arrows: false,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ],
});
let projects = document.getElementsByClassName('menu__item--projects'),
    news = document.getElementById('news'),
    contact = document.getElementById('contact'),
    about = document.getElementById('about');




$(function () {
    $('.icon-scroll').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#projects').offset().top }, 1000);
        e.preventDefault();


    });
    $('.menu__item--projects').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#projects').offset().top }, 1000);
        e.preventDefault();
        $(".menu-item--projects").classList.add = 'menu__item--active'

    });
    $('.menu__item--news').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#news').offset().top }, 1000);
        e.preventDefault();
    });
    $('.menu__item--contact').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1000);
        e.preventDefault();
    });
    $('.menu__item--about').on('click', function (e) {
        $('html,body').stop().animate({ scrollTop: $('#about').offset().top }, 1000);
        e.preventDefault();
    });

});

function navigate() {
    this.id
    console.log(this.element)
};

function showMore() {
    let text = document.getElementById("hidden");
    let button = document.getElementById("btn-details");
    if (text.classList.length) {
        text.classList.remove("hidden");
        button.innerHTML = '<span>Less details</span>'
    } else {
        text.classList.add("hidden");
        button.innerHTML = 'more details'
    }
};

function showMoreRtl() {
    let text = document.getElementById("hidden-rtl");
    let button = document.getElementById("btn-details-rtl");
    if (text.classList.length) {
        text.classList.remove("hidden-rtl");
        button.innerHTML = '<span>Less details</span>'
    } else {
        text.classList.add("hidden-rtl");
        button.innerHTML = 'More details'
    }
};


function initMap() {
    let company = { lat: 40.6845839, lng: -73.9183413 };
    let middle = { lat: 40.6618365, lng: -73.9018467 }
    let iconC = 'images/pin.png'
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13.18, center: middle });
    var marker = new google.maps.Marker({ position: company, map: map, icon: iconC });
    $.getJSON("js/map-style.json", function (data) {
        map.setOptions({ styles: data });
    });
}

function getInfo() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    console.log(name, email)
    alert(`Thank you, ${name}!`)
}

var t;
function up() {
    var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (top > 0) {
        window.scrollBy(0, -100);
        t = setTimeout('up()', 20);
    } else clearTimeout(t);
    return false;
}
