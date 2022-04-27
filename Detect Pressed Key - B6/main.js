"use strict";
feather.replace();
const keyElAll = document.querySelectorAll(".key");
document.addEventListener("keydown", function (e) {
  const keyText = e.key.toUpperCase();
  resetActiveKey();
  keyElAll.forEach((key) => {
    if (keyText === key.textContent) {
      key.classList.add("active-key");
    }
  });
  keyElAll.forEach((key) => {
    key.querySelectorAll("span").forEach((keyChild) => {
      if (keyText === keyChild.textContent) {
        key.classList.add("active-key");
      }
    });
  });
  if (keyText === "SHIFT") {
    document.querySelector(".key__shift-left").classList.add("active-key");
    document.querySelector(".key__shift-right").classList.add("active-key");
  } else if (keyText === "BACKSPACE") {
    document.querySelector(".key__delete").classList.add("active-key");
  } else if (keyText === " ") {
    document.querySelector(".key__spacebar").classList.add("active-key");
  } else if (keyText === "ENTER") {
    document.querySelector(".key__enter").classList.add("active-key");
  } else if (keyText === "DELETE") {
    document.querySelector(".key__trash").classList.add("active-key");
  } else if (keyText === "TAB") {
    document.querySelector(".key__oneandhalf").classList.add("active-key");
  } else if (keyText === "ARROWUP") {
    document.querySelector(".arrow__up").classList.add("active-arrow");
  } else if (keyText === "ARROWDOWN") {
    document.querySelector(".arrow__down").classList.add("active-arrow");
  } else if (keyText === "ARROWRIGHT") {
    document.querySelector(".arrow__right").classList.add("active-arrow");
  } else if (keyText === "ARROWLEFT") {
    document.querySelector(".arrow__left").classList.add("active-arrow");
  } else if (keyText === "ESCAPE") {
    document.querySelector(".key__esc").classList.add("active-out");
  }
});
function resetActiveKey() {
  keyElAll.forEach((key) => {
    key.classList.remove("active-key");
    key.classList.remove("active-arrow");
    key.classList.remove("active-out");
  });
}
