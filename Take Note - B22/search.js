import RecipeNewNote from "./newNote.js";
import { resetChooseTakeNote } from "./main.js";
const search = document.querySelector("#search");
export function handlerSearch() {
  const data = JSON.parse(localStorage.getItem("data"));
  if (!data) return;
  search.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      document
        .querySelector(".contain-show-take--note")
        .classList.remove("add-note-active");
      resetChooseTakeNote();
      const searchValue = `#${this.value.toUpperCase()}`;
      data.forEach((dataChild) => {
        dataChild.tags.forEach((tag) => {
          if (tag === searchValue) {
            RecipeNewNote.handlerSearchLocal(dataChild.pos);
          }
        });
      });
      this.value = "";
    }
  });
}
