"use strict";
const video = document.querySelector(".contain-vd > video");
const icPause = document.querySelector(".icon-pause-video");
const icPlay = document.querySelector(".icon-play-video");
const icVolume = document.querySelector(".icon-audio-video");
const icMute = document.querySelector(".icon-mute-video");
const rangeVolume = document.querySelector(".range-volume");
const heartEl = document.querySelector(".heart");
const numberHeartEl = document.querySelector(".number-heart");
///Handler Play-Pause
icPlay.addEventListener("click", function () {
  video.play();
  showIcon();
});
icPause.addEventListener("click", function () {
  video.pause();
  showIcon();
});
function showIcon() {
  icPause.classList.toggle("active-video");
  icPlay.classList.toggle("inactive-video");
  rangeVolume.classList.remove("active-volume");
}
///Handler Volume
icVolume.addEventListener("click", function () {
  rangeVolume.classList.toggle("active-volume");
  handlerVolume();
});
function handlerVolume(data) {
  if (!data) return;
  const volume = +data / 100;
  video.volume = volume;
  if (volume === 0.01) {
    icVolume.classList.add("active-mute");
    icMute.classList.add("inactive-mute");
  } else {
    icVolume.classList.remove("active-mute");
    icMute.classList.remove("inactive-mute");
  }
}
//Tiktok Click Heart
let numberHeart = Number(numberHeartEl.textContent);
document
  .querySelector(".contain-vd")
  .addEventListener("dblclick", function (e, method = +numberHeart + 1) {
    const x = e.clientX;
    const y = e.clientY;
    let heart = document.createElement("div");
    heart.setAttribute("class", "contain-active_heart");
    heart.style.top = `${y}px`;
    heart.style.left = `${x}px`;
    document.querySelector(".wrap-contain-heart").appendChild(heart);
    heartEl.classList.add("active-fillHeart");
    rangeVolume.classList.remove("active-volume");
    numberHeartEl.textContent = method;
    localStorage.setItem("heartCount", numberHeartEl.textContent);
    localStorage.setItem("heart", "active-fillHeart");
    setTimeout(() => heart.remove(), 1000);
  });
heartEl.addEventListener("click", function () {
  if (this.classList.contains("active-fillHeart")) {
    this.classList.remove("active-fillHeart");
    numberHeartEl.textContent = +numberHeart;
    localStorage.setItem("heartCount", numberHeartEl.textContent);
    localStorage.setItem("heart", "empty");
  } else {
    this.classList.add("active-fillHeart");
    numberHeartEl.textContent = +numberHeart + 1;
    localStorage.setItem("heartCount", numberHeartEl.textContent);
    localStorage.setItem("heart", "active-fillHeart");
  }
});
window.addEventListener("load", function () {
  const storeHeart = localStorage.getItem("heartCount");
  numberHeartEl.textContent = storeHeart;
  const fillHeart = localStorage.getItem("heart");
  heartEl.classList.add(fillHeart);
});
////Feature Spam Heart
document.querySelector(".spam-heart").addEventListener("click", function () {
  this.classList.add("active-spam");
  if (heartEl.classList.contains("active-fillHeart")) {
    heartEl.classList.remove("active-fillHeart");
    numberHeartEl.textContent = +numberHeart;
  }
  document
    .querySelector(".contain-vd")
    .addEventListener("dblclick", function (e, method = ++numberHeart) {
      const x = e.clientX;
      const y = e.clientY;
      let heart = document.createElement("div");
      heart.setAttribute("class", "contain-active_heart");
      heart.style.top = `${y}px`;
      heart.style.left = `${x}px`;
      document.querySelector(".wrap-contain-heart").appendChild(heart);
      heartEl.classList.add("active-fillHeart");
      numberHeartEl.textContent = method;
      localStorage.setItem("heartCount", 888); //default number
      localStorage.setItem("heart", "empty");
      setTimeout(() => heart.remove(), 1000);
    });
});
