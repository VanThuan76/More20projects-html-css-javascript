import { pos, listsNote } from "./main.js";
const inputTitle = document.querySelector("#title");
const inputComment = document.querySelector("#comment");
export function changeTitle(note, dataset) {
  const data = JSON.parse(localStorage.getItem("data"));
  const check = data.findIndex((el) => +el.pos === +dataset);
  if (check > -1) {
    data.map((data) => {
      if (+data.pos === +dataset) {
        document.querySelector("#save").addEventListener("click", function () {
          if (
            inputTitle.value.trim() != "" &&
            inputComment.value.trim() != ""
          ) {
            this.setAttribute("name", "save");
            note.querySelector(".title-note>h2").textContent = inputTitle.value;
            note.querySelector(
              ".comment-note> p"
            ).textContent = `${inputComment.value.substring(0, 120)}...`;
            listsNote[+data.pos].title = inputTitle.value;
            listsNote[+data.pos].comment = inputComment.value;
            localStorage.setItem("data", JSON.stringify(listsNote));
          }
          setTimeout(function () {
            document
              .querySelector("#save")
              .setAttribute("name", "save-outline");
          }, 200);
        });
      }
    });
  }
}
