import RecipeView from "./view.js";
const next = document.querySelector(".nr-next");
const prev = document.querySelector(".nr-prev");
export const handlerSlideShow = function () {
  RecipeView.slideShow.forEach((sl, i) => {
    sl.addEventListener("click", function (e) {
      e.preventDefault();
      RecipeView.activeRecipeAll();
      RecipeView.dotShow[i].classList.add("dot-show");
      sl.classList.add("slide-open");
      sl.querySelector(".imgShow").classList.add("image-show");
      sl.querySelector("p").classList.add("text-show");
    });
  });
};
let currSlide = 0;
const sumSlide = RecipeView.slideShow.length;
export const handlerNarrowSlide = function () {
  next.addEventListener("click", function () {
    if (currSlide === sumSlide - 1) {
      currSlide = 0;
    } else currSlide++;
    RecipeView.narrowSlideShow(currSlide);
  });
  prev.addEventListener("click", function () {
    if (currSlide === 0) {
      currSlide = sumSlide - 1;
    } else currSlide--;
    RecipeView.narrowSlideShow(currSlide);
  });
};
export const handlerKeyCodeSlide = function () {
  window.addEventListener("keydown", function (e) {
    if (e.keyCode === 37) {
      if (currSlide === 0) {
        currSlide = sumSlide - 1;
      } else currSlide--;
      setTimeout(function () {
        RecipeView.narrowSlideShow(currSlide);
      }, 1500);
    } else if (e.keyCode === 39) {
      if (currSlide === sumSlide - 1) {
        currSlide = 0;
      } else currSlide++;
      setTimeout(function () {
        RecipeView.narrowSlideShow(currSlide);
      }, 1500);
    }
  });
};
