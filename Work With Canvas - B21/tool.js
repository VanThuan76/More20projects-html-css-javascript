import { canvas, ctx } from "./app.js";
import { hexToRgbA } from "./convertColor.js";
const tools = document.querySelectorAll("#tool");
export let color;
export let oldColor;
let size = 1;
let x, y;
let drawing = false;
function handleColor() {
  document.querySelector("#color").addEventListener("change", function (e) {
    document
      .querySelector(".body-infomation")
      .classList.remove("show-body-infomation");
    document
      .querySelector(".head-infomation > box-icon")
      .classList.remove("showInfor");
    color = hexToRgbA(this.value, 1);
    oldColor = hexToRgbA(this.value, 1);
    handleOpacity(this.value);
  });
}
handleColor();
function handleOpacity(data) {
  document
    .querySelector(".func-pencil-other > .opacity")
    .addEventListener("change", function () {
      let resultOpacity;
      let convertColor = (+this.value - (+this.value % 10)) / 10;
      if (convertColor != 10) {
        resultOpacity = `0.${convertColor}`;
      } else {
        resultOpacity = "1";
      }
      if (data === undefined) {
        data = "#000";
      } else data;
      color = hexToRgbA(data, +resultOpacity);
      oldColor = hexToRgbA(data, +resultOpacity);
    });
}
handleOpacity();
function resetActiveTools() {
  tools.forEach((tool) => tool.classList.remove("active-tool"));
}
export function handleTools() {
  const colorPaint = document.querySelector(".color-paint");
  const pencilFunc = document.querySelector(".func-pencil");
  const pencilFuncOther = document.querySelector(".func-pencil-other");
  tools.forEach((tool) => {
    tool.addEventListener("click", function () {
      resetActiveTools();
      tool.classList.add("active-tool");
      if (tool.classList.contains("pencil")) {
        pencilFunc.classList.add("show-func-pencil");
        pencilFuncOther.classList.add("show-func-pencil");
        colorPaint.classList.remove("inactive-color-paint");
        handlePencil();
        color = "undefined" || "#fff" ? "#000" : oldColor;
        color = oldColor;
      } else if (tool.classList.contains("eraser")) {
        colorPaint.classList.add("inactive-color-paint");
        pencilFunc.classList.add("show-func-pencil");
        pencilFuncOther.classList.remove("show-func-pencil");
        color = "#fff";
      }
    });
  });
}
//DRAWING-CANVAS
document.addEventListener("mouseup", function (e) {
  drawing = false;
  x = undefined;
  y = undefined;
});
function handleSize() {
  document.querySelector(".decrease").addEventListener("click", function () {
    size -= 5;
    if (size < 0) {
      size = 1;
    }
    document.querySelector(".handler-pencil > p").textContent = size;
  });
  document.querySelector(".increase").addEventListener("click", function () {
    size += 5;
    if (size >= 50) {
      size = 50;
    }
    document.querySelector(".handler-pencil > p").textContent = size;
  });
}
handleSize();
function handlePencil() {
  canvas.addEventListener("mousedown", function (e) {
    x = e.offsetX;
    y = e.offsetY;
    drawing = true;
  });
  canvas.addEventListener("mousemove", function (e) {
    if (drawing) {
      const x2 = e.offsetX;
      const y2 = e.offsetY;
      draw(x, y, x2, y2);
      x = x2;
      y = y2;
    }
  });
  function draw(x, y, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.lineCap = "round";
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.stroke();
  }
}
