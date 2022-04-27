"use strict";
import { helpsEl } from "./helps.js";
const containerSearch = document.querySelector(".container-search");
const containerHelpSearch = document.querySelector(".contain-help");
const btn = document.querySelector(".search");
const inputParent = document.querySelector(".contain-ip");
const inputEl = document.querySelector(".input");
const numsData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let arrayNums = [];
let i = numsData.length;
let j = 0;
btn.addEventListener("click", function () {
  inputParent.classList.toggle("open");
  inputEl.focus();
  if (inputParent.classList.contains("open")) {
    setTimeout(function () {
      containerSearch.classList.add("show-container-search");
    }, 1000);
  } else {
    containerSearch.classList.remove("show-container-search");
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }
});
while (i--) {
  j = Math.floor(Math.random() * (i + 1));
  arrayNums.push(numsData[j]);
  if (i === 13) {
    arrayNums.map((index) => {
      handlerShowHelpSeach(helpsEl[index].icon, helpsEl[index].title);
    });
  }
}
function handlerShowHelpSeach(icon, title) {
  const markup = `
    <div class="help">
        ${icon}
        <p>${title}</p>
    </div>
  `;
  containerHelpSearch.innerHTML += markup;
}
