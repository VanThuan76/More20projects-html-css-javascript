"use strict";
let dragged;
const uploadImg = document.querySelector('.input[type = "file"]');
const fill = document.querySelector(".fill");
uploadImg.addEventListener("change", function (e) {
  const check = e.target.files[0];
  const urlImg = URL.createObjectURL(check);
  const imgShow = document.createElement("img");
  uploadImg.nextElementSibling.innerHTML = "";
  imgShow.setAttribute("class", "img");
  imgShow.setAttribute("src", urlImg);
  removeAll();
  uploadImg.parentNode.appendChild(imgShow);
  uploadImg.parentNode.setAttribute("draggable", true);
  dragged = imgShow;
});
document.querySelectorAll(".drag").forEach((empty) => {
  empty.addEventListener("dragstart", dragStart);
  empty.addEventListener("dragend", dragEnd);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.classList.add("dragging");
}

function dragEnd() {
  this.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
  this.appendChild(dragged);
}

function dragDrop() {
  this.appendChild(dragged);
  this.setAttribute("draggable", true);
  const contentInput = `
   <ion-icon class="icon-upload" name="cloud-upload"></ion-icon>
   <p class="text-img">Upload to preview image</p>
  `;
  const wrapInput = this.parentNode.querySelector(".wrap--input");
  wrapInput.querySelector(".content").innerHTML = contentInput;
}
function removeAll() {
  document.querySelector(".img").remove();
}
