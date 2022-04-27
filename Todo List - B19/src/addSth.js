import { realTime } from "./realtime.js";
import { countAddSth } from "./countSth.js";
import { showPlans } from "./rangeSth.js";
import { removeSomething } from "./removeSth.js";
import { editSth } from "./changeSth.js";
window.removeSomething = removeSomething;
window.editSth = editSth;
export let id = 0;
export let test = [];
export function addSomething(data, el, position) {
  const domContainer = el.previousElementSibling;
  const containSth = document.createElement("div");
  const markup = `
  <div class="timeCurr" data-set="${id}">
  <p><label>${realTime()}</label></p>
  </div>
  <li ondblclick="editSth(this, ${id}, this.id)">
  <p>${data}</p>
  <ion-icon name="trash-outline" onclick="removeSomething(this, ${id})"></ion-icon>
  </li>
  `;
  containSth.setAttribute("id", `${position}`);
  containSth.setAttribute("class", "drag");
  containSth.setAttribute("draggable", "true");
  containSth.innerHTML += markup;
  domContainer.appendChild(containSth);
  countAddSth();
  showPlans();
  el.value = "";
  el.nextElementSibling
    .querySelector("ion-icon")
    .classList.remove("hidden-addSomething");
  el.remove();
  let dataFormStore = {
    id: containSth.querySelector(".timeCurr").getAttribute("data-set"),
    pos: containSth.getAttribute("id"),
    div: containSth,
  };
  id = +dataFormStore.id + 1;
  test.push(dataFormStore);
  localStorage.setItem(
    "works",
    JSON.stringify(
      test.map((el) => {
        return {
          id: el.id,
          pos: el.pos,
          div: typeof el.div.innerHTML === "string" ? el.div.innerHTML : el.div,
        };
      })
    )
  );
}
////LocalStore [Must AddSth]
const results = localStorage.getItem("works");
const dataStore = JSON.parse(results);
if (dataStore) {
  dataStore.forEach((el) => {
    test.push(el);
    id = +el.id + 1;
    const wrapElStore = document.createElement("div");
    wrapElStore.setAttribute("class", "drag");
    wrapElStore.setAttribute("draggable", "true");
    wrapElStore.innerHTML += el.div;
    if (el.pos === "pos-todo") {
      document.querySelector(".container-todo--child").appendChild(wrapElStore);
    } else if (el.pos === "pos-progress") {
      document.querySelector(".container-progress").appendChild(wrapElStore);
    } else {
      document.querySelector(".container-done").appendChild(wrapElStore);
    }
    countAddSth();
  });
}
