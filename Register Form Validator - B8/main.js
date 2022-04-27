"use strict";
const inputs = document.querySelectorAll(".input");
const coverInput = document.querySelectorAll(".body-ct > ul > li");
const button = document.querySelectorAll(".btn");
const emailInput = document.querySelector(".email").value;
const emailTextError = document.querySelector(".span-email");
const spanRegister = document.querySelectorAll(".span");
const spanSignup = document.querySelectorAll(".span-signup");
const resetForm = function () {
  coverInput.forEach(
    (border) => (border.style.borderBottom = "2px solid #adadad")
  );
  spanRegister.forEach((span) => (span.textContent = ""));
  spanSignup.forEach((span) => (span.textContent = ""));
};
const border = function (e, result) {
  coverInput.forEach((border, index) => {
    if (index === e && result) {
      border.style.borderBottom = "2px solid #3ca7ee";
    } else if (index === e && !result) {
      border.style.borderBottom = "2px solid red";
    }
  });
};
const textErrorRegister = function (e, result, mail) {
  spanRegister.forEach((span, index) => {
    const textArr = ["Username", "Email", "Password", "Password2"];
    if (index === e && result) {
      span.textContent = `${textArr[index]} not required`;
    } else if (index === e && !result) {
      span.textContent = "";
    } else if (index === e && result && mail)
      mail.textContent = "Email not valid";
  });
};
const handleTextSignup = function (e, result) {
  spanSignup.forEach((span, index) => {
    const textArr = ["Username", "Password"];
    if (index === 0 && !result && e === 4) {
      span.textContent = `${textArr[0]} not valid`;
    } else if (index === 1 && !result && e === 5) {
      span.textContent = `${textArr[1]} not correct`;
    } else if (result) {
      span.textContent = "";
    }
  });
};
button.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    inputs.forEach((input, index) => {
      if (typeof input.value === "string" && input.value.trim() != "") {
        border(index, true);
        textErrorRegister(index, false);
        handleTextSignup(index, true);
      } else {
        border(index, false);
        textErrorRegister(index, true);
        handleTextSignup(index, false);
      }
      const email = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
      if (email.test(document.querySelector(".email").value)) {
        textErrorRegister(1, false);
        border(1, true);
      } else {
        textErrorRegister(1, true, emailTextError);
        border(1, false);
      }
    });
  });
});
/////
function handleSignup() {
  document.querySelector(".signup").classList.add("show-signup");
  resetForm();
}
function handleRegister() {
  document.querySelector(".signup").classList.remove("show-signup");
  resetForm();
}
