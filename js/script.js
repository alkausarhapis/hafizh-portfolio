// shadow
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 40) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// theme
const themebutton = document.getElementById("theme-button");
const darktheme = "dark-theme";
const icontheme = "bxs-sun";

// activate theme manual
themebutton.addEventListener("click", () => {
  document.body.classList.toggle(darktheme);
  themebutton.classList.toggle(icontheme);
});

// Swiper
var swiper = new Swiper(".slide-container", {
  slidesPerView: 2,
  spaceBetween: 50,
  sliderPerGroup: 2,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  autoplay: {
    delay: 6000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1000: {
      slidesPerView: 2,
    },
  },
});
