"use strict";
const header = document.querySelector(".header");
const headBody = document.querySelector(".head-body");
const headCtPage = document.querySelector(".content-page");
const contentHeadPage = document.querySelector(".head-content--page");
const showScroll = document.querySelectorAll(".showScroll");
const handlerHeadPage = function (condition) {
  if (condition === true) {
    contentHeadPage.classList.add("active-headCt");
    headCtPage.classList.add("active-headCt");
  } else {
    headCtPage.classList.remove("active-headCt");
    contentHeadPage.classList.remove("active-headCt");
  }
};
const handlerBodyPage = function (condition) {
  if (condition === true) {
    document.querySelectorAll(`.tag_char`).forEach((el) => {
      el.classList.add("active-tag_char");
    });
  } else {
    document.querySelectorAll(`.tag_char`).forEach((el) => {
      el.querySelector("p").classList.remove("show-card--text");
      el.classList.remove("active-tag_char");
      el.classList.remove("show-card");
    });
  }
};
const handlerShowScroll = function () {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset <= 750) {
      handlerHeadPage(true);
      handlerBodyPage(false);
    } else if (window.pageYOffset > 750 && window.pageYOffset < 1400) {
      handlerHeadPage(false);
      handlerBodyPage(true);
    }
  });
};
handlerShowScroll();
/////STICKY
const obsCallback = function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting === false) {
      header.classList.add("active-header");
    } else {
      header.classList.remove("active-header");
    }
  });
};
const observer = new IntersectionObserver(obsCallback, {
  root: null,
  threshold: 0.1,
  rootMargin: "10px",
});
observer.observe(headBody);
///Card-Show-After Scroll
showScroll.forEach((card) => {
  card.addEventListener("click", function () {
    removeAllActiveShowCard();
    card.classList.add("show-card");
    setTimeout(function () {
      card.querySelector("p").classList.add("show-card--text");
    }, 300);
  });
});
const removeAllActiveShowCard = function () {
  showScroll.forEach((card) => {
    card.classList.remove("show-card");
    card.querySelector("p").classList.remove("show-card--text");
  });
};
////Loading Web
const loadWeb = function () {
  document.querySelector(".wrap-slogan").classList.remove("lazy-loading");
};
const cancelLoadWeb = function () {
  document.querySelector(".wrap-slogan").classList.add("close-wrap-slogan");
  [".header", ".head-body", ".contain-body"].forEach((el) => {
    document.querySelector(`${el}`).classList.remove("lazy-loading");
  });
};
setTimeout(function () {
  cancelLoadWeb();
  document.querySelector("*").style.overflowY = "scroll";
  handlerHeadPage(true);
}, 3500);
///Header
document.querySelector(".home").addEventListener("click", function () {
  window.scrollTo({
    top: 56,
    behavior: "smooth",
  });
});
document.querySelector(".about-us").addEventListener("click", function () {
  window.scrollTo({
    top: 1200,
    behavior: "smooth",
  });
});
