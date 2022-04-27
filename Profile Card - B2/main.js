"use strict";
const iconReal = document.querySelector(".ic-real");
const boxicons = document.querySelectorAll(".icon-fake");
const btnContact = document.querySelector(".btn-real");
iconReal.addEventListener("mouseover", function (e) {
  e.preventDefault();
  resetMouseOver();
  setTimeout(function () {
    boxicons.forEach((icon) => icon.classList.add("run-icFake"));
  }, 300);
});
function resetMouseOver() {
  boxicons.forEach((icon) => icon.classList.remove("run-icFake"));
}
btnContact.addEventListener("mouseover", function (e) {
  const button = e.target;
  button.textContent = "CLICK";
  button.classList.add("animate-btn");
});
btnContact.addEventListener("mouseleave", function (e) {
  const button = e.target;
  if (!button) return;
  button.querySelector(".btn").textContent = "CONTACT ME";
  button.querySelector(".btn").classList.remove("animate-btn");
});
