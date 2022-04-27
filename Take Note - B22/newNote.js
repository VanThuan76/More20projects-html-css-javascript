import { month } from "./realTime.js";
import { toolFont, toolSize, toolStyle } from "./tools.js";
import { changeTitle } from "./changeNote.js";
import { removeTags } from "./deleteTag.js";
class RecipeNewNote {
  parentBodyTakeNote = document.querySelector(".body-take--note");
  notes;
  handlerViewAddNote(pos, title, comment, tags) {
    const cmt = comment.substring(0, 120);
    const markup = `
    <div class="date-note">
      <p>${month()}</p>
    </div>
    <div class="title-note">
      <h2>${title}</h2>
    </div>
    <div class="comment-note">
     <p>${cmt}...</p>
    </div>
    <div class="hastag-note">
      <ul>
      ${tags.length > 0 ? this.handlerTagLocal(tags) : ""}
      </ul>
      <div class="show-largeTag">
        <p>+ <span>1</span></p>
      </div>
    </div>
    `;
    const takeNote = document.createElement("div");
    takeNote.setAttribute("class", "take-note");
    takeNote.setAttribute("dataset", `${pos}`);
    takeNote.innerHTML = markup;
    this.parentBodyTakeNote.appendChild(takeNote);
    this.notes = document.querySelectorAll(".take-note");
  }
  handlerTagLocal(tags) {
    const localTags = tags.map((el) => `<li class="tags">${el}</li>`).join(" ");
    return localTags;
  }
  handlerSearchLocal(data) {
    this.notes.forEach((note) => {
      if (data === +note.getAttribute("dataset")) {
        note.classList.add("choose-take--note");
      }
    });
  }
  handlerViewShowNote(
    resetChooseTakeNote,
    removeTakeNote,
    addTag,
    dataTags,
    realTime
  ) {
    this.notes.forEach((note) => {
      note.addEventListener("click", function () {
        let data;
        let sizeText = document.querySelector("textarea").style.fontSize;
        let fontText = document.querySelector("textarea").style.fontFamily;
        const dataset = note.getAttribute("dataset");
        const check = JSON.parse(localStorage.getItem("data")).find(
          (data) => +data.pos === +dataset
        );
        data = check;
        document.querySelector("#title").value = data.title;
        document.querySelector("#comment").value = data.comment;
        resetChooseTakeNote();
        removeTakeNote(note, data.pos);
        note.classList.add("choose-take--note");
        const markup = `
        <div class="head-show-take--note">
        <div class="information-take--note">
            <div class="name-infor">
              <p>Created by</p>
              <p>Last updated</p>
              <p>Tags</p>
            </div>
          <div class="content-info">
            <div class="author">
              <span>${data.author}</span>
            </div>
            <div class="time">
              <span>${realTime()}</span>
            </div>
            <div class="show-tags">
              <ul>
              ${data.tags.length > 0 ? dataTags() : " "}
              </ul>
              <ion-icon id="add-tags" name="add-outline" ></ion-icon>
            </div>
          </div>
        </div>
        <div class="tools-take--note">
          <div class="font-text">
              <p>${fontText != "" ? fontText : "Roboto"}</p>
              <ion-icon name="chevron-down-outline"></ion-icon>
              <div class="contain-font--text">
                <ul>
                  <li>Roboto</li>
                  <li>Poppins</li>
                  <li>Rubik</li>
                  <li>Tapestry</li>
                </ul>
              </div>
          </div>
          <div class="size-text">
              <p>${sizeText != "" ? sizeText : "16px"}</p>
              <ion-icon name="chevron-down-outline"></ion-icon>
              <div class="contain-size--text">
                <ul>
                  <li>8px</li>
                  <li>16px</li>
                  <li>32px</li>
                  <li>64px</li>
                  <li>128px</li>
                </ul>
              </div>
          </div>
          <div class="bold-text">B</div>
          <div class="italic-text">I</div>
          <div class="underlined-text">U</div>
      </div>
      <div class="btn-save-take--notes">
        <ion-icon id="save" name="save-outline"></ion-icon>
      </div>
      </div>
        `;
        document.querySelector(".wrap-infor").innerHTML = markup;
        document
          .querySelector(".contain-show-take--note")
          .classList.add("add-note-active");
        addTag(dataset, note, data.pos);
        removeTags(note, data.pos);
        toolFont();
        toolSize();
        toolStyle();
        changeTitle(note, data.pos);
      });
    });
  }
  handlerDataNotes(pos, author, title, comment, tags) {
    const data = {
      pos: pos,
      author: author,
      title: title,
      comment: comment,
      tags: tags,
    };
    return data;
  }
}
export default new RecipeNewNote();
