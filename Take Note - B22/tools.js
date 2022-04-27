let boldText;
let italicText;
let underlinedText;
let textArea;
export function toolFont() {
  const fontText = document.querySelector(".font-text");
  const containFontText = document.querySelector(".contain-font--text");
  fontText.addEventListener("click", function () {
    containFontText.classList.toggle("show-font--text");
    containFontText.querySelectorAll("ul > li").forEach((li) => {
      li.addEventListener("click", function (e) {
        fontText.querySelector("p").textContent = e.target.textContent;
        textArea.style.fontFamily = `${e.target.textContent}`;
      });
    });
  });
}
export function toolSize() {
  const sizeText = document.querySelector(".size-text");
  const containSizeText = document.querySelector(".contain-size--text");
  sizeText.querySelector("ion-icon").addEventListener("click", function () {
    containSizeText.classList.toggle("show-size--text");
    containSizeText.querySelectorAll("ul > li").forEach((li) => {
      li.addEventListener("click", function (e) {
        sizeText.querySelector("p").textContent = e.target.textContent;
        textArea.style.fontSize = `${e.target.textContent}`;
        containSizeText.classList.remove("show-size--text");
      });
    });
  });
}
export function toolStyle() {
  boldText = document.querySelector(".bold-text");
  italicText = document.querySelector(".italic-text");
  underlinedText = document.querySelector(".underlined-text");
  textArea = document.querySelector("textarea");
  [boldText, italicText, underlinedText].forEach((el, index) => {
    el.addEventListener("click", function () {
      resetTool();
      el.classList.add("tool-choose");
      if (index === 0) {
        textArea.classList.toggle("tool-boldText");
      } else if (index === 1) {
        textArea.classList.toggle("tool-italicText");
      } else {
        textArea.classList.toggle("tool-underlinedText");
      }
    });
  });
}
function resetTool() {
  [boldText, italicText, underlinedText].forEach((el) => {
    textArea.classList.remove("tool-underlinedText");
    textArea.classList.remove("tool-italicText");
    textArea.classList.remove("tool-boldText");
    el.classList.remove("tool-choose");
  });
}
