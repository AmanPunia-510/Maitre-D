$(".slider").slick({
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
        dots: false,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
      },
    },
  ],
});

//  animations

AOS.init();

// work on search svg

const search_svg = document.querySelector(".s-svg");
const search_box = document.querySelector(".search-box");

search_svg.addEventListener("click", () => {
  if (search_box.classList.contains("d-none")) {
    search_box.classList.remove("d-none");
    search_box.classList.add("d-block");
  } else {
    search_box.classList.add("d-none");
    search_box.classList.remove("d-block");
  }
});

// work on toggle

const toggle = document.querySelector(".toggle");
const toggleBall = document.querySelector(".toggle-ball");
const right1 = document.querySelector(".right1-svg");
const right2 = document.querySelector(".right2-svg");
const txt_449 = document.querySelector(".txt-449");
const month = document.querySelector(".month");
const txt1_price = document.querySelector(".txt1-price");

toggle.addEventListener("click", () => {
  toggleBall.classList.toggle("right");

  if (toggleBall.classList.contains("right")) {
    right1.setAttribute("src", "./assets/images/right.png");
    right2.setAttribute("src", "./assets/images/right.png");
    txt_449.innerHTML = "$900";
    month.innerHTML = "/yearly";
  } else {
    right1.setAttribute("src", "./assets/images/wrong.png");
    right2.setAttribute("src", "./assets/images/wrong.png");
    txt_449.innerHTML = "$449";
    month.innerHTML = "/Month";
  }
});

// at the media query

const mediaQuery = window.matchMedia("(max-width: 576px)");
const txt1Price = document.querySelector(".txt1-price");

function handleMediaQueryChange(mediaQuery) {
  if (mediaQuery.matches) {
    toggle.addEventListener("click", toggleHandler);
    txt1Price.textContent = "Monthly Pricing";
  } else {
    toggle.removeEventListener("click", toggleHandler);
    txt1Price.textContent = "Monthly Pricing";
  }
}

function toggleHandler() {
  if (toggleBall.classList.contains("right")) {
    txt1Price.textContent = "Yearly Pricing";
  } else {
    txt1Price.textContent = "Monthly Pricing";
  }
}

handleMediaQueryChange(mediaQuery);

mediaQuery.addListener(handleMediaQueryChange);

// toggle navbar

const navbar = document.querySelector(".navbar-items");
const menubar = document.querySelector(".menubar");

menubar.addEventListener("click", () => {
  navbar.classList.toggle("show");
  const body = document.querySelector("body");
  if (navbar.classList.contains("show")) {
    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = "0";
    body.style.left = "0";
  } else {
    body.style.position = "relative";
  }
});

// searchbar

const keywords = ["Home", "Modules", "Pricing", "Features", "Contact Us"];

const keywordClasses = {};

keywords.forEach((keyword, index) => {
  let id;
  if (index === 0) {
    id = "home";
  } else if (index === 1) {
    id = "modules";
  } else if (index === 2) {
    id = "pricing";
  } else if (index === 3) {
    id = "features";
  } else if (index === 4) {
    id = "contact-us";
  }
  keywordClasses[keyword.toLowerCase()] = id;
});

const search = document.querySelector("#search");
const result = document.querySelector("#result-here");

search.addEventListener("keyup", () => {
  let filter = [];
  let input = search.value.trim().toLowerCase();

  filter = keywords.filter((item) => {
    return item.toLowerCase().includes(input);
  });

  result.textContent = "";

  if (input.length === 0) {
    return;
  }

  filter.forEach((value) => {
    const anchor = document.createElement("a");
    anchor.textContent = value;

    anchor.setAttribute(
      "href",
      `#${String(keywordClasses[value.toLowerCase()])}`
    );
    anchor.setAttribute(
      "class",
      `${String(keywordClasses[value.toLowerCase()])} commen-js`
    );

    result.appendChild(anchor);
  });

  console.log(filter);
});
