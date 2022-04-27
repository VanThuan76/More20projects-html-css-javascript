"use strict";
const wrapNtf = document.querySelector(".wrap-ntf > ul");
const fullBtn = document.querySelectorAll(".btn");
fullBtn.forEach((btn, index) =>
  btn.addEventListener("click", function (e) {
    const icon = ["checkmark", "alert", "close", "help"];
    const textNtf = ["Well done!", "Warning!", "Oh snap!", "Hi there!"];
    const textChildNtf = [
      "You successfully read this important message.",
      "Sorry! There was a problem with your request.",
      "Change a few things up and try submitting again.",
      "Do you have a problem? Just use this contact form.",
    ];
    const classAttr = e.target.getAttribute("class");
    const ntf = document.createElement("div");
    ntf.className = `ntf border-${index}`;
    // if (index === 2) {
    ntf.innerHTML = `
      <div class="union uni-${index}">
      <ion-icon class="icon" name="${icon[index]}-outline"></ion-icon>
      </div>
      <div class="contain-ntf ${classAttr} ntf-${index} ">
      <div class="empty"></div>
      <div class="information-text">
      <h1 class="text-ntf">${textNtf[index]}</h1>
      <p class="textChild-ntf">${textChildNtf[index]}</p>
      </div>
      <div class="wrap-background">
      <div class="contain-background">
      <div class="ellipse el-${index}"></div>
      <div class="ellipse-0 el-${index}"></div>
      <div class="ellipse-0-child el-${index}"></div>
      <div class="ellipse-1 el-${index}"></div>
      <div class="ellipse-2 el-${index}"></div>
      <div class="ellipse-3 el-${index}"></div>
      </div>
      </div>
      <div class="close-ntf">
      <ion-icon class="icon-close" name="close-outline"></ion-icon>
      </div>
      <span class="countdown"></span>
      </div>
      `;
    wrapNtf.appendChild(ntf);
    const closeNtf = document.querySelectorAll(".icon-close");
    closeNtf.forEach((el) => {
      el.addEventListener("click", function () {
        el.closest(".ntf").remove();
      });
    });
    setTimeout(function () {
      ntf.style.animation = "close 1s linear";
    }, 4000);
    setTimeout(function () {
      ntf.remove();
    }, 5000);
  })
);
