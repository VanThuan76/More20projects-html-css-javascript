"use strict";
import { showHeader } from "./header.js";
import { handleTools } from "./tool.js";
import { handleInforPaint } from "./infor.js";
export let canvas = document.querySelector("#canvas");
export const ctx = canvas.getContext("2d");
showHeader();
handleTools();
localDataPaint();
handleInforPaint();
function localDataPaint() {
  const dataCanvasW = localStorage.getItem("canvasW");
  const dataCanvasH = localStorage.getItem("canvasH");
  canvas.width = dataCanvasW;
  canvas.height = dataCanvasH;
  const dataUrl = localStorage.getItem("canvas");
  if (dataUrl !== null) {
    const img = new Image();
    img.src = dataUrl;
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
    };
  }
}
//ZOOMING
let scale = 1;
let zoom = 1;
let activeZoom = true;
function handlerCalcZoom(event) {
  scale += event.deltaY * -0.01;
  scale = Math.min(Math.max(1, scale), zoom);
  canvas.style.transform = `scale(${scale})`;
}
function handlerZoom(top, left) {
  canvas.style.transformOrigin = `${left}px ${top}px`;
}
canvas.addEventListener("mousedown", function () {
  activeZoom = false;
});
canvas.addEventListener(
  "mousemove",
  function (e) {
    const left = e.offsetX != null ? e.offsetX : e.originalEvent.layerX;
    const top = e.offsetY != null ? e.offsetY : e.originalEvent.layerY;
    if (activeZoom) {
      handlerZoom(top, left);
    }
    canvas.addEventListener("wheel", (event) => {
      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      if (delta === -1) {
        zoom += 1;
        if (zoom === 20) zoom = 10;
        handlerCalcZoom(event);
      } else {
        zoom -= 1;
        if (zoom === 0) zoom = 1;
        handlerCalcZoom(event);
        activeZoom = true;
      }
    });
  },
  { passive: false }
);
