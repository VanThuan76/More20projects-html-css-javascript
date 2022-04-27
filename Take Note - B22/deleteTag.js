import { listsNote } from "./main.js";
export function removeTags(data, pos) {
  document.querySelectorAll(".show-tags > ul > li").forEach((tag) => {
    tag.addEventListener("dblclick", function (e) {
      const notification = confirm("Are you sure?");
      const check = listsNote.findIndex((data) => +data.pos === pos);
      notification === true ? e.target.remove() : check === -2;
      if (check > -1) {
        let newTags = [];
        listsNote[pos].tags.find((tag) => {
          if (tag !== e.target.textContent) {
            newTags.push(tag);
          }
        });
        listsNote[pos].tags = newTags;
        localStorage.setItem("data", JSON.stringify(listsNote));
        data.querySelectorAll(".hastag-note > ul > li").forEach((li) => {
          if (li.textContent === e.target.textContent) {
            li.remove();
          }
        });
      }
    });
  });
}
