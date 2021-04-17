(function(){

// sliders init
let topSlider = new Swiper(".top-slider", {
    speed: 1000,

    on: {
        init: function() {
            this.el.style.opacity = 1;
        }
    },

    autoplay: {
        delay: 4000
    }
});

function updatePrevSlideClasses({$el, slides, activeIndex}) {
    $el.find('.swiper-slide-prev-prev').removeClass('swiper-slide-prev-prev');
    slides.eq(activeIndex).prev().prev().addClass('swiper-slide-prev-prev');
}

let serivcesSlider = new Swiper(".services-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    
    on: {
        init: function() {
            this.el.style.opacity = 1;
            updatePrevSlideClasses(this);
        },
        slideChange: function() {
            updatePrevSlideClasses(this);
        }
    },

    navigation: {
        prevEl: ".prev-service",
        nextEl: ".next-service"
    }
});

let reviewsSlider = new Swiper(".reviews-slider", {
    slidesPerView: "auto",
    spaceBetween: 30,
    
    on: {
        init: function() {
            this.el.style.opacity = 1;
            updatePrevSlideClasses(this);
        },
        slideChange: function() {
            updatePrevSlideClasses(this);
        }
    },

    navigation: {
        prevEl: ".prev-reviews",
        nextEl: ".next-reviews"
    }
});

window.addEventListener("scroll", function() {
    let yPos = this.scrollY;
    let header = document.getElementById("header");
    let headerHeight = header.offsetHeight;
    let body = document.querySelector("body");
    let hph = document.querySelector(".header-placeholder");
    
    if (yPos > headerHeight) {
        body.classList.add("header-fixed");
        hph.style.height = headerHeight + "px";
    } else {
        body.classList.remove("header-fixed");
        hph.style.height = 0
    }
});

})();