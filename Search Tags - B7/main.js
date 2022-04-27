"use strict";
const reactJs = document.querySelector(".tags__2");
const nodeJs = document.querySelector(".tags__1");
const close = document.querySelectorAll(".close");
const input = document.querySelector("#input");
const containTags = document.querySelector("ul");
const remove = document.querySelector(".btn");
const tagsAll = document.querySelectorAll(".tags");
const wrapSearch = document.querySelector(".wrap-ct");
//////
const markup = function (value) {
  return `
  <li>
  <div class="tags">
  <span>${value}</span>
  <ion-icon class="icon" name="close-outline"></ion-icon>
  </div>
  </li>
  `;
};
///////
let tags = [];
input.addEventListener("change", function (e) {
  e.preventDefault();
  if (!tags.includes(input.value)) {
    tags.push(input.value);
    const searchTags = markup(
      input.value.length > 10
        ? `${input.value.substring(0, 10)}...`
        : input.value
    );
    containTags.innerHTML += searchTags;
    const iconDelete = document.querySelectorAll(".icon");
    iconDelete.forEach((e) => {
      e.addEventListener("click", function () {
        e.parentNode.parentNode.remove();
      });
    });
    input.value = "";
  } else input.value = "";
});
const removeTags = function () {
  containTags.innerHTML = "";
  tags = [];
};
remove.addEventListener("click", removeTags);
