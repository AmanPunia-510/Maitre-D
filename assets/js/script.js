$('.slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    prevArrow: ".prev",
    nextArrow: ".next",
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            }
        }
    ]
});

// onscroll animation

window.addEventListener("scroll", () => {
    let all_items = document.querySelectorAll(".animation-part");

    all_items.forEach(items => {
        let top = items.getBoundingClientRect().top;

        if (top < window.innerHeight) {
            items.classList.add("opacity");
        }
        else {
            items.classList.remove("opacity");
        }
    })
})

// work on searchbar