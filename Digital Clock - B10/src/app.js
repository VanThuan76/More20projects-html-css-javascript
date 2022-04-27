"use strict";
import { realTime } from "./realTime.js";
const hourEl = document.querySelector(".hr");
const minuteEl = document.querySelector(".mn");
const sectionEl = document.querySelector(".sc");
function handlerClock() {
  let day = new Date();
  let hour = day.getHours() * 30;
  let minute = day.getMinutes() * 6;
  let section = day.getSeconds() * 6;
  hourEl.style.transform = `rotateZ(${hour + minute / 12}deg)`;
  minuteEl.style.transform = `rotateZ(${minute}deg)`;
  sectionEl.style.transform = `rotateZ(${section}deg)`;
}
function handlerShowTime() {
  let day = new Date();
  let hour = day.getHours();
  let minute = day.getMinutes();
  let checkSec = hour >= 12 ? "PM" : "AM";
  const currTime = `${String(hour).padStart(2, "0")}:${String(minute).padStart(
    2,
    "0"
  )} ${checkSec}`;
  document.querySelector(".timeCurr > h1").textContent = currTime;
  document.querySelector(".dateCurr > p").textContent = realTime();
}
setInterval(function () {
  handlerClock();
  handlerShowTime();
}, 1000);
/////Contrast
function contrast() {
  document.querySelector(".light-mode").addEventListener("click", function () {
    contrastReset();
    this.classList.add("show-mode");
    document.querySelector("html").classList.toggle("light-mode-color");
  });
  document.querySelector(".dark-mode").addEventListener("click", function () {
    contrastReset();
    this.classList.add("show-mode");
    document.querySelector("html").classList.toggle("light-mode-color");
  });
  function contrastReset() {
    [".light-mode", ".dark-mode"].forEach((el) => {
      document.querySelector(el).classList.remove("show-mode");
    });
  }
}
contrast();
