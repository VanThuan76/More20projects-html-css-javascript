"use strict";
const bgIconEnjoy = document.querySelector(".st0-enjoy");
const recipeIcEnjoy1 = document.querySelector("#enjoy1");
const recipeIcEnjoy2 = document.querySelector("#enjoy2");
const bgIconShy = document.querySelector(".st0-shy");
const recipeIcShy1 = document.querySelector("#shy1");
const recipeIcShy2 = document.querySelector("#shy2");
const bgIconShock = document.querySelector(".st0-shock");
const recipeIcShock1 = document.querySelector("#shock2");
const recipeIcShock2 = document.querySelector("#shock1");
function showEnjoy() {
  bgIconEnjoy.classList.add("showEnjoy");
  recipeIcEnjoy1.classList.add("activeEnjoy");
  recipeIcEnjoy2.classList.add("activeRecipeAll");
}
function showShy() {
  bgIconShy.classList.add("showShy");
  recipeIcShy1.classList.add("activeShy");
  recipeIcShy2.classList.add("activeRecipeAll");
}
function showShock() {
  bgIconShock.classList.add("showShock");
  recipeIcShock1.classList.add("activeShock");
  recipeIcShock2.classList.add("activeRecipeAll");
}
function resetAll() {
  bgIconEnjoy.classList.remove("showEnjoy");
  bgIconShy.classList.remove("showShy");
  bgIconShock.classList.remove("showShock");
  recipeIcEnjoy1.classList.remove("activeEnjoy");
  recipeIcShy1.classList.remove("activeShy");
  recipeIcShock1.classList.remove("activeShock");
  [recipeIcEnjoy2, recipeIcShy2, recipeIcShock2].forEach((el) =>
    el.classList.remove("activeRecipeAll")
  );
}
function initVote(condition) {
  switch (condition) {
    case 5:
      showEnjoy();
      break;
    case 3:
    case 4:
      showShy();
      break;
    case 1:
    case 2:
      showShock();
      break;
  }
}
function initRate(data) {
  document.querySelectorAll(".icon-rate").forEach((el, index) => {
    if (index < data) {
      el.querySelectorAll("path").forEach((el) =>
        el.classList.add("activeStar")
      );
    } else if (index >= data) {
      el.querySelectorAll("path").forEach((el) =>
        el.classList.remove("activeStar")
      );
    }
  });
}
document.querySelectorAll(".icon-rate").forEach((el, index) => {
  el.addEventListener("click", function () {
    const data = index + 1;
    initRate(data);
    resetAll();
    initVote(data);
    localStorage.setItem("vote", data);
  });
  const saveVote = localStorage.getItem("vote");
  initRate(+saveVote);
  initVote(+saveVote);
});
