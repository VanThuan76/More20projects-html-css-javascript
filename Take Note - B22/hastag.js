import { listsNote } from "./main.js";
import { handlerSearch } from "./search.js";
import { removeTags } from "./deleteTag.js";
export function addTag(dataset, note, dataPos) {
  const addTag = document.querySelector("#add-tags");
  const markup = `
  <li class="tags">
  <p>#</p>
  <input id="tags" placeholder="#">
  </li>
`;
  let tagsArray;
  const data = JSON.parse(localStorage.getItem("data"));
  const tagsLocalData = data[dataset].tags;
  data[dataset].tags.length === 0
    ? (tagsArray = [])
    : (tagsArray = tagsLocalData);
  addTag.addEventListener("click", function () {
    document.querySelector(".show-tags > ul").innerHTML += markup;
    const tag = document.querySelectorAll("#tags");
    tag.forEach((tag) => {
      tag.focus();
      tag.addEventListener("keydown", function (e) {
        if (e.keyCode === 13 && tag.value.trim() != "") {
          const result = `#${tag.value}`;
          const tagEl = document.querySelectorAll(".tags > p");
          tag.previousElementSibling.textContent = result.toUpperCase();
          tagEl.forEach((el) => tagsArray.push(el.textContent));
          listsNote[dataset].tags = [...new Set(tagsArray)];
          tag.classList.add("active-tags");
          localStorage.setItem("data", JSON.stringify(listsNote));
          handlerShowTags(tag.value);
          removeTags(note, dataPos);
        }
      });
    });
  });
}
export function dataTags() {
  return document
    .querySelector(".choose-take--note")
    .querySelector(".hastag-note > ul").innerHTML;
}
function handlerShowTags(tagValue) {
  const chooseTakeNote = document.querySelector(".choose-take--note");
  const tagEl = `<li class="tags">#${tagValue.toUpperCase()}</li>`;
  if (chooseTakeNote) {
    chooseTakeNote.querySelector(".hastag-note > ul").innerHTML += tagEl;
  }
}
