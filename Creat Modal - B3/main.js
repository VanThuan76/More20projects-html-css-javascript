"use strict";
const modal = document.querySelector(".modal");
const outsideModal = document.querySelector(".outside-modal");
const showModal = document.querySelector(".wrap-show--modal");
modal.addEventListener("click", function () {
  outsideModal.style.transition = "0.5s";
  outsideModal.classList.add("show-outside-modal");
  modal.style.backgroundColor = "#fff";
  modal.classList.add("show-modal-box");
  const textModal = `
   <p>
    More 20 Project Interesting
    Training For Beginner Learning Language!
   </p>
  `;
  modal.innerHTML = textModal;
  showModal.classList.add("active-alert--modal");
  showModal.querySelector(".show-modal").classList.add("active-modal-child");
  setTimeout(function () {
    outsideModal.style.boxShadow = "-30px 30px 10px rgba(0, 0, 0, 0.5)";
  }, 200);
});
showModal.addEventListener("click", function () {
  outsideModal.style.transition = "0s";
  outsideModal.classList.remove("show-outside-modal");
  modal.style.backgroundColor = "#748ffc";
  modal.classList.remove("show-modal-box");
  const textModal = `
    <h1>
     Front-End Beginner
    </h1>
  `;
  showModal.classList.remove("active-alert--modal");
  showModal.querySelector(".show-modal").classList.remove("active-modal-child");
  setTimeout(function () {
    outsideModal.style.boxShadow = "";
    modal.innerHTML = textModal;
  }, 200);
});
