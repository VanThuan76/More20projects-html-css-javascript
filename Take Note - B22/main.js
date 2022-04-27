("use strict");
import RecipeNewNote from "./newNote.js";
import { realTime } from "./realTime.js";
import { addTag, dataTags } from "./hastag.js";
import { removeTakeNote } from "./deleteNote.js";
import { localTakeNote } from "./localStore.js";
import { handlerSearch } from "./search.js";
export let listsNote = [];
window.onload = localTakeNote();
handlerSearch();
export let tags = [];
export let pos;
const btnNewNote = document.querySelector(".add-note");
const btnNoteDone = document.querySelector(".btn-done-take--note");
const containAuthor = document.querySelector(".import-author-take--note");
const containShowNote = document.querySelector(".contain-show-take--note");
const containShowInfor = document.querySelector(".wrap-infor");
const inputAuthor = document.querySelector("#author");
const inputTitle = document.querySelector("#title");
const inputComment = document.querySelector("#comment");
btnNewNote.addEventListener("click", function () {
  authorIp();
  defaultAddNote();
});

btnNoteDone.addEventListener("click", function (e) {
  if (inputTitle.value.trim() != "" && inputComment.value.trim() != "") {
    const data = JSON.parse(localStorage.getItem("data"));
    !data || data.length === 0
      ? (pos = -1)
      : (pos = data[data.length - 1].pos++);
    pos++;
    const title = inputTitle.value;
    const comment = inputComment.value;
    const author = inputAuthor.value;
    RecipeNewNote.handlerViewAddNote(pos, title, comment, tags);
    listsNote.push(
      RecipeNewNote.handlerDataNotes(pos, author, title, comment, tags)
    );
    localStorage.setItem("data", JSON.stringify(listsNote));
    e.target.setAttribute("name", "checkmark-circle");
    resetAddNote();
    RecipeNewNote.handlerViewShowNote(
      resetChooseTakeNote,
      removeTakeNote,
      addTag,
      dataTags,
      realTime
    );
  }
});
function authorIp() {
  containAuthor.classList.add("show-import-author");
  inputAuthor.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      containAuthor.classList.remove("show-import-author");
    }
  });
}
function resetAddNote() {
  btnNoteDone.classList.add("hidden-btn-done");
  containAuthor.parentNode.classList.remove("hidden-import-author");
  containShowNote.classList.remove("add-note-active");
  setTimeout(function () {
    inputComment.value = "";
    inputTitle.value = "";
    inputAuthor.value = "";
  }, 500);
}
function defaultAddNote() {
  setTimeout(function () {
    containShowNote.classList.add("add-note-active");
    btnNoteDone.classList.remove("hidden-btn-done");
    btnNoteDone.childNodes[1].setAttribute("name", "checkmark-circle-outline");
  }, 500);
  containShowInfor.innerHTML = "";
  inputComment.value = "";
  inputComment.placeholder = "Comment note right here...";
  inputTitle.placeholder = "Enter a title here...";
  inputTitle.value = "";
  resetChooseTakeNote();
}
export function resetChooseTakeNote() {
  document
    .querySelectorAll(".take-note")
    .forEach((note) => note.classList.remove("choose-take--note"));
}
