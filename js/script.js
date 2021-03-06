/* ===========================================================================
                Start Script For Main Nav Fixed On Top & Sticky
==============================================================================*/

const banner = document.querySelector('.banner-img');
const nav = document.querySelector('.main-nav');

const bannerHeight = banner.offsetHeight;
const mainNavHeight = nav.offsetHeight;

const ofset = bannerHeight - mainNavHeight;

window.onscroll = function () {
    if (window.pageYOffset > ofset) {
        nav.classList.remove('bottom-nav');
        nav.classList.add('top-nav');
    }
    else {
        nav.classList.add('bottom-nav');
        nav.classList.remove('top-nav');
    }
}

/* ===========================================================================
                End Script For Main Nav Fixed On Top & Sticky
==============================================================================*/


/* ===========================================================================
                Start Award Owl Carousel Slider
==============================================================================*/

$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 3
            },
            900: {
                items: 4
            },
            1100: {
                items: 5
            }
        }
    });
});
    

/* ===========================================================================
                End Award Owl Carousel Slider
==============================================================================*/


/* ===========================================================================
                Start Animated Counter
==============================================================================*/
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
/* ===========================================================================
                End Animated Counter
==============================================================================*/
