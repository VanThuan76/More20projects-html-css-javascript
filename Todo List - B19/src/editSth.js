import { realTime } from "./realtime.js";
import { test } from "./addSth.js";
export function addEditSomething(data, el, id, position) {
  const markup = `
  <div class="timeCurr" data-set="${id}">
  <p><label>${realTime()}</label> (Changed)</p>
  </div>
  <li ondblclick="editSth(this, ${id})">
  <p>${data}</p>
  <ion-icon name="trash-outline" onclick="removeSomething(this, ${id})"></ion-icon>
  </li>
  `;
  const changedSth = (el.closest(".drag").innerHTML = markup);
  const check = test.findIndex((el) => +el.id === +id);
  if (check > -1) {
    test.map((data) => {
      if (data.id === id) {
        data.div = changedSth;
      }
    });
  }
  el.parentNode.remove();
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
