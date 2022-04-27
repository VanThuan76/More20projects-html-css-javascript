import { addEditSomething } from "./editSth.js";
window.addEditSomething = addEditSomething;
export function editSth(el, id, position) {
  const editSth = document.createElement("div");
  const markup = `
     <input
     id="${id}"
     type="text"
     value="${el.querySelector("p").textContent}"
     onchange="addEditSomething(this.value, this,this.id, ${position})"
     autofocus
     />
     `;
  editSth.setAttribute("class", "edit-something");
  editSth.innerHTML = markup;
  el.appendChild(editSth);
}
