import { canvas } from "./app.js";
///INFOR PAINT
export function handleInforPaint() {
  document
    .querySelector(".head-color > box-icon")
    .addEventListener("click", function () {
      this.classList.toggle("showInfor");
      document.querySelector(".body-color").classList.toggle("show-body-color");
    });
  document
    .querySelector(".head-infomation > box-icon")
    .addEventListener("click", function () {
      this.classList.toggle("showInfor");
      const markup = `
      <p>Size: ${canvas.width} x ${canvas.height} (px)</p>
      <p>Color: ${
        document.querySelector("#color").value === undefined
          ? "#000"
          : document.querySelector("#color").value
      }</p>
    `;
      const bdInfor = document.querySelector(".body-infomation");
      bdInfor.innerHTML = markup;
      document
        .querySelector(".body-infomation")
        .classList.toggle("show-body-infomation");
    });
}
