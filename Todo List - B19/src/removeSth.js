import { test } from "./addSth.js";
import { countAddSth } from "./countSth.js";
import { showPlans, hiddenPlans } from "./rangeSth.js";
export function removeSomething(el, id) {
  const check = test.findIndex((data) => +data.id === id);
  if (check > -1) {
    test.splice(check, 1);
  }
  el.closest(".drag").remove();
  countAddSth();
  showPlans();
  hiddenPlans();
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
