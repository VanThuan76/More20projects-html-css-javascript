"use strict";
import { showPlans } from "./rangeSth.js";
import { dragStart, dragEnd, dragOver, dragDrop } from "./dragSth.js";
import { addSomething } from "./addSth.js";
window.addSomething = addSomething;
document.querySelectorAll(".add-icons > ion-icon").forEach((add) => {
  add.addEventListener("click", function () {
    showSomething(this);
  });
});
function showSomething(el) {
  const domParent = el.parentNode;
  const domInput = domParent.previousElementSibling;
  const checkPosition = el.id;
  resetShowSth();
  const markup = `<input id="${checkPosition}" class="input-something" type="text" onchange="addSomething(this.value, this, this.id)" autofocus/>`;
  domInput.insertAdjacentHTML("afterend", markup);
  document.querySelector(".input-something").focus();
  el.classList.add("hidden-addSomething");
}

function resetShowSth() {
  document.querySelectorAll(".input-something").forEach((ip) => ip.remove());
  document
    .querySelectorAll(".add-icons ion-icon")
    .forEach((add) => add.classList.remove("hidden-addSomething"));
}
showPlans();
//Handler Drag-Drop
document.querySelectorAll(".container").forEach((empty) => {
  empty.addEventListener("dragstart", dragStart);
  empty.addEventListener("dragend", dragEnd);
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("drop", dragDrop);
});
