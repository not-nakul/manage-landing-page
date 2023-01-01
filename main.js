import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 50,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    800: {
      pagination: false,
      slidesPerView: 2.5,
      spaceBetween: 50,
    },
  },
});

const body = document.querySelector("body");
const primaryHeader = document.querySelector("[data-primary-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const primaryNav = document.querySelector("[data-primary-nav]");
const inputField = document.querySelector("[data-input-field]");
const inputError = document.querySelector("[data-input-error]");
const formButton = document.querySelector("[data-form-button]");
const iconClose = document.querySelector(".icon-close");
const iconHamburger = document.querySelector(".icon-hamburger");

iconClose.style.display = "none";
iconHamburger.style.display = "block";

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  body.toggleAttribute("data-nav-open");
  primaryHeader.toggleAttribute("data-backdrop");

  if (iconClose.style.display === "none") {
    iconClose.style.display = "block";
    iconHamburger.style.display = "none";
  } else {
    iconClose.style.display = "none";
    iconHamburger.style.display = "block";
  }
});

inputField.addEventListener("blur", (event) => {
  if (
    event.target.value.trim() === "" ||
    event.target.value.includes("@") === false
  ) {
    inputError.classList.add("input-error-show");
  }

  if (
    event.target.value.trim() !== "" &&
    event.target.value.includes("@") === true
  ) {
    inputError.classList.remove("input-error-show");
  }
});

formButton.addEventListener("click", (event) => {
  event.preventDefault();
});
