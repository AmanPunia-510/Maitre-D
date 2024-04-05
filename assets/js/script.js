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

 AOS.init();

const search_svg = document.querySelector(".s-svg");
const search_box = document.querySelector(".search-box");

search_svg.addEventListener("click", () => {
    if (search_box.classList.contains("d-none")) {
        search_box.classList.remove("d-none");
        search_box.classList.add("d-block");
    }

    else {
        search_box.classList.add("d-none");
        search_box.classList.remove("d-block");
    }
})

const keywords = [
    'About Us',
    'Features',
    'Modules',
    'Simple pricing for everyone',
    'Get in touch!',
];

const result = document.querySelector("#result-here");
const search = document.querySelector("#search");

search.addEventListener("keyup", () => {
    let filteredResults = [];
    let input = search.value.toLowerCase();
    if (input.length) {
        filteredResults = keywords.filter((keyword) => {
            return keyword.toLowerCase().includes(input);
        });
        displayResults(filteredResults);
    } else {
        result.textContent = '';
    }
});

function displayResults(filteredResults) {
    result.innerHTML = ''; 
    if (filteredResults.length > 0) {
        filteredResults.forEach((item) => {
            const listItem = document.createElement('div');
            listItem.textContent = item;
            result.appendChild(listItem);
        });
    } else {
        result.textContent = 'No matching results found';
    }
}


// work on toggle

const toggle = document.querySelector(".toggle");
const toggleBall = document.querySelector(".toggle-ball");
const right1 = document.querySelector(".right1-svg");
const right2 = document.querySelector(".right2-svg");
const txt_449 = document.querySelector(".txt-449");
const month = document.querySelector(".month");

toggle.addEventListener("click", () => {
    toggleBall.classList.toggle("right");

    if (toggleBall.classList.contains("right")) {
        right1.setAttribute("src", "./assets/images/right.png");
        right2.setAttribute("src", "./assets/images/right.png");
        txt_449.innerHTML = "$900";
        month.innerHTML = "/year";
    } else {
        right1.setAttribute("src", "./assets/images/wrong.png");
        right2.setAttribute("src", "./assets/images/wrong.png");
        txt_449.innerHTML = "$449";
        month.innerHTML = "/Month";
    }
});
