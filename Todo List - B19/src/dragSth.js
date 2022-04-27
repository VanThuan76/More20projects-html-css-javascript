import { countAddSth } from "./countSth.js";
import { showPlans } from "./rangeSth.js";
import { test } from "./addSth.js";
//Drag and Drop
let dragged;
let posMoved;
export function dragStart(event) {
  dragged = event.target;
  posMoved = event.target.querySelector(".timeCurr").getAttribute("data-set");
  document.querySelectorAll(".container").forEach((empty) => {
    empty.classList.add("area-drag");
  });
}
export function dragEnd() {
  document.querySelectorAll(".container").forEach((empty) => {
    empty.classList.remove("area-drag");
  });
}
export function dragOver(e) {
  e.preventDefault();
}
export function dragDrop(e) {
  e.preventDefault();
  if (e.target.classList.contains("container")) {
    e.target.appendChild(dragged);
  }
  countAddSth();
  showPlans();
  const checkPos = e.target.getAttribute("id");
  const check = test.findIndex((el) => +el.id === +posMoved);
  if (check > -1) {
    test.map((data) => {
      if (data.id === posMoved) {
        data.pos = checkPos;
      }
    });
    localStorage.setItem(
      "works",
      JSON.stringify(
        test.map((el) => {
          return {
            id: el.id,
            pos: el.pos,
            div:
              typeof el.div.innerHTML === "string" ? el.div.innerHTML : el.div,
          };
        })
      )
    );
  }
}
