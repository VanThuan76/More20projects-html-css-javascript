import { listsNote } from "./main.js";
export function removeTakeNote(data, pos) {
  data.addEventListener("dblclick", function () {
    const notification = confirm("Are you sure?");
    const check = listsNote.findIndex((data) => +data.pos === pos);
    notification === true ? data.remove() : check === -2;
    if (check > -1) {
      listsNote.splice(check, 1);
      document
        .querySelector(".contain-show-take--note")
        .classList.remove("add-note-active");
      localStorage.setItem("data", JSON.stringify(listsNote));
    }
  });
}
