import RecipeNewNote from "./newNote.js";
import { realTime } from "./realTime.js";
import { addTag, dataTags } from "./hastag.js";
import { listsNote, resetChooseTakeNote } from "./main.js";
import { removeTakeNote } from "./deleteNote.js";
export function localTakeNote() {
  const data = JSON.parse(localStorage.getItem("data"));
  if (!data) return;
  document
    .querySelector(".btn-done-take--note")
    .classList.add("hidden-btn-done");
  data.forEach((dataChild) => {
    listsNote.push(dataChild);
    const pos = dataChild.pos;
    const title = dataChild.title;
    const comment = dataChild.comment;
    const tag = dataChild.tags;
    RecipeNewNote.handlerViewAddNote(pos, title, comment, tag);
    RecipeNewNote.handlerViewShowNote(
      resetChooseTakeNote,
      removeTakeNote,
      addTag,
      dataTags,
      realTime
    );
  });
}
