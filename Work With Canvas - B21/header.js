import { canvas, ctx } from "./app.js";
///HEADER PAINT
let showImgRotate = false;
const headerEl = document.querySelectorAll(".header-paint > ul > li");
const coverHeaderEl = document.querySelector(".cover-header-paint--new");
const coverHeaderEdit = document.querySelector(".cover-header-paint--edit");
function resetShowHeader() {
  headerEl.forEach((li) => li.classList.remove("show-header"));
  document.querySelector(".file-paint").classList.remove("show-file-paint");
  document.querySelector(".edit-paint").classList.remove("show-edit-paint");
  coverHeaderEl.classList.remove("show-file-paint");
  coverHeaderEdit.classList.remove("show-edit-paint");
}
function handleNewCanvas() {
  document.querySelector("#new").addEventListener("click", function () {
    const newCanvas = document.querySelector(".wrap-newCanvas");
    const containNewCanvas = document.querySelector(".contain-newCanvas");
    newCanvas.classList.add("show-newCanvas");
    containNewCanvas.classList.add("show-newCanvas");
    newCanvas.addEventListener("click", function () {
      newCanvas.classList.remove("show-newCanvas");
      containNewCanvas.classList.remove("show-newCanvas");
    });
    ["#current", "#square", "#landscape", "#portrait"].forEach((el, index) => {
      document.querySelector(el).addEventListener("click", function () {
        if (index === 0) {
          document.querySelector("#width").value = "1587";
          document.querySelector("#height").value = "977";
        } else if (index === 1) {
          document.querySelector("#width").value = "927";
          document.querySelector("#height").value = "927";
        } else if (index === 2) {
          document.querySelector("#width").value = "1236";
          document.querySelector("#height").value = "927";
        } else if (index === 3) {
          document.querySelector("#width").value = "695";
          document.querySelector("#height").value = "927";
        }
      });
    });
    document.querySelector("#accept").addEventListener("click", function () {
      canvas.width = document.querySelector("#width").value;
      canvas.height = document.querySelector("#height").value;
      newCanvas.classList.remove("show-newCanvas");
      containNewCanvas.classList.remove("show-newCanvas");
    });
    document
      .querySelector(".body-infomation")
      .classList.remove("show-body-infomation");
    document
      .querySelector(".head-infomation > box-icon")
      .classList.remove("showInfor");
  });
  showImgRotate = true;
}
function handleClearCanvas() {
  document.querySelector("#clear").addEventListener("click", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    localStorage.setItem("canvas", canvas.toDataURL());
    localStorage.setItem("canvasW", canvas.width);
    localStorage.setItem("canvasH", canvas.height);
  });
}
function handleSaveCanvas() {
  document.querySelector("#save").addEventListener("click", function () {
    localStorage.setItem("canvas", canvas.toDataURL());
    localStorage.setItem("canvasW", canvas.width);
    localStorage.setItem("canvasH", canvas.height);
    showImgRotate = false;
  });
}
function handleExportCanvas() {
  document.querySelector("#export").addEventListener("click", function (e) {
    const imgUrl = canvas.toDataURL("image/png");
    document.querySelector("#export > a").href = imgUrl;
  });
}
function handleEditCanvas() {
  const editCanvas = document.querySelector(".wrap-editCanvas");
  const containEditCanvas = document.querySelector(".contain-editCanvas");
  editCanvas.classList.add("show-newCanvas");
  containEditCanvas.classList.add("show-newCanvas");
  editCanvas.addEventListener("click", function () {
    editCanvas.classList.remove("show-newCanvas");
    containEditCanvas.classList.remove("show-newCanvas");
  });
  ["#degCurr", "#degChange"].forEach((el, index) => {
    document.querySelector(el).addEventListener("click", function () {
      if (index === 0) {
        document.querySelector("#deg").value = "0";
        const dataCanvasW = localStorage.getItem("canvasW");
        const dataCanvasH = localStorage.getItem("canvasH");
        canvas.width = dataCanvasW;
        canvas.height = dataCanvasH;
        if (!showImgRotate) {
          const dataUrl = localStorage.getItem("canvas");
          if (dataUrl !== null) {
            const img = new Image();
            img.src = dataUrl;
            img.onload = function () {
              ctx.drawImage(img, 0, 0);
            };
          }
        }
      } else if (index === 1) {
        document.querySelector("#deg").value = "90";
        canvas.width = canvas.height;
        canvas.height = canvas.width;
        if (!showImgRotate) {
          const dataUrl = localStorage.getItem("canvas");
          if (dataUrl !== null) {
            const img = new Image();
            img.src = dataUrl;
            img.onload = function () {
              ctx.clearRect(0, 0, canvas.width, canvas.height);
              ctx.save();
              ctx.translate(canvas.width / 2, canvas.height / 2);
              ctx.rotate(90 * (Math.PI / 180));
              ctx.drawImage(img, -img.width / 2, -img.width / 2);
              ctx.restore();
            };
          }
        }
      }
    });
  });
  document.querySelector("#acceptEdit").addEventListener("click", function () {
    editCanvas.classList.remove("show-newCanvas");
    containEditCanvas.classList.remove("show-newCanvas");
  });
}
///EDIT
function EditCanvas() {
  document.querySelector(".edit-paint").classList.add("show-file-paint");
  coverHeaderEdit.classList.add("show-edit-paint");
  coverHeaderEdit.addEventListener("click", function () {
    handleEditCanvas();
  });
}
////IMAGE
function importImage() {
  const uploadImg = document.querySelector('.input[type = "file"]');
  uploadImg.addEventListener("change", function (e) {
    const check = e.target.files[0];
    const urlImg = URL.createObjectURL(check);
    if (urlImg !== null) {
      const image = new Image();
      image.src = urlImg;
      image.onload = function () {
        ctx.drawImage(image, 0, 0);
      };
    }
  });
}
///HELP
function helpCanvas() {
  document.querySelector(".help").addEventListener("click", function () {
    alert("Sorry,this service not working!");
  });
}
export function showHeader() {
  headerEl.forEach((li, index) => {
    li.addEventListener("click", function () {
      resetShowHeader();
      li.classList.add("show-header");
      coverHeaderEl.classList.add("show-file-paint");
      coverHeaderEl.addEventListener("click", resetShowHeader);
      coverHeaderEdit.addEventListener("click", resetShowHeader);
      if (index === 0) {
        document.querySelector(".file-paint").classList.add("show-file-paint");
        handleNewCanvas();
        handleClearCanvas();
        handleSaveCanvas();
        handleExportCanvas();
      } else if (index === 1) {
        EditCanvas();
      } else if (index === 2) {
        importImage();
      } else if (index === 4) {
        helpCanvas();
      }
    });
  });
}
