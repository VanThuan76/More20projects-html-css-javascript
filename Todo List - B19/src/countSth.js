export function countAddSth() {
  document.querySelectorAll(".container").forEach((par) => {
    const domHeader = par.previousElementSibling;
    domHeader.querySelectorAll("p").forEach((p) => {
      p.textContent = par.querySelectorAll("li").length;
    });
  });
}
