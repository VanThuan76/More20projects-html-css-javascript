"use strict";
const image = document.querySelector(".img__size");
const colors = document.querySelectorAll(".color");
const size = document.querySelectorAll(".size");
const btnCart = document.querySelector(".add-cart");
const btnBuy = document.querySelector(".buy-now");
const numCart = document.querySelector(".number-cart > p");
const heartBuy = document.querySelector(".ic__heart");
colors.forEach((color) => {
  color.addEventListener("click", function () {
    resetColor();
    this.classList.add("choose-color");
    const data = color.getAttribute("dataset");
    image.src = `images/${data}.png`;
  });
});
size.forEach((size) => {
  size.addEventListener("click", function () {
    resetSize();
    size.classList.add("choose-size");
  });
});
function resetSize() {
  size.forEach((size) => size.classList.remove("choose-size"));
}
function resetColor() {
  colors.forEach((color) => {
    color.classList.remove("choose-color");
  });
}
///Buy
let num = 0;
btnCart.addEventListener("click", function () {
  num++;
  numCart.textContent = num;
});
btnBuy.addEventListener("click", function () {
  heartBuy.setAttribute("name", "heart");
});
