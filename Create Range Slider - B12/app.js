"use strict";
const rangeEl = document.querySelector(".slider-range");
const rangeMin = document.querySelector(".range-min");
const rangeMax = document.querySelector(".range-max");
const minEl = document.querySelector(".min");
const maxEl = document.querySelector(".max");
let limitPrice = 10;
[rangeMin, rangeMax].map((range, index) => {
  let defaultRange = rangeEl.getBoundingClientRect();
  if (defaultRange.x === 0) {
    alert("Zoom in screen");
  } else {
    range.addEventListener("input", function (e) {
      if (rangeMax.value - rangeMin.value <= limitPrice) {
        if (e.target.className === "range-min") {
          rangeMin.value = rangeMax.value - limitPrice;
        } else {
          rangeMax.value = rangeMin.value + limitPrice;
        }
      } else if (index === 0) {
        e.defaultPrevented;
        minEl.textContent = `$${range.value}`;
        rangeEl.style.left = `${range.value}%`;
      } else if (index === 1) {
        maxEl.textContent = `$${range.value}`;
        rangeEl.style.right = `${100 - range.value}%`;
      }
    });
  }
});
