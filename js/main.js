// Type Lib
var typed = new Typed('.element', {
    strings: [' a Businessman', 'Sameh Elsaid', ' a Developer', 'a Designer'],
    smartBackspace: true,
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    autoplayTimeout: 1000
});
//Owl Lib
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        }
    }
})
//filterizr
const filterizr = $('.filter-container').filterizr({
    animationDuration: 0.5
})
//wow
new WOW().init();
//JQuery
$(document).ready(function () {
    //Header Animation
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            $(".navbar").addClass("sticky")
        } else {
            $(".navbar").removeClass("sticky")
        }
    });
    //Pars Scroll  Animation
    $(window).scroll(() => {
        if ($(this).scrollTop() >= $(".text p").eq(1).offset().top) {
            $(".skills").addClass("animation")
        }
        //active link  Scroll
        $("section").each((i, ele) => {
            if ($(this).scrollTop() >= $("#" + ele.id).offset().top) {
                $(".nav-item").find("a").removeClass("active")
                $(".nav-item").eq(i).find("a").addClass("active")
            }
        })
    })
    // pars Widths
    let parsParent = document.querySelectorAll(".skill span")
    let pars = document.querySelectorAll(".skill span .pars")
    parsParent.forEach((ele, i) => {
        let parsWidth = ele.getAttribute("data-whidth")
        pars[i].style.width = parsWidth
    })
    //load
    $(window).on("load", () => {
        $(".popUp").addClass("anination")
    })
});
