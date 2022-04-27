import RecipeView from "./viewplay.js";
export function chooseHand() {
  const hands = document.querySelectorAll("#hand");
  hands.forEach((hand) => {
    hand.addEventListener("click", function () {
      removeChooseHand();
      const data = hand.getAttribute("class");
      hand.setAttribute("dataset", `${data}`);
      const playNowEl = document.querySelector(".play-now");
      playNowEl.classList.add("show-play-now");
      hand.querySelector("img").classList.add("choose-hand");
    });
  });
  startPlay();
}
export function removeChooseHand() {
  const hands = document.querySelectorAll("#hand");
  hands.forEach((hand) => {
    hand.querySelector("img").classList.remove("choose-hand");
    hand.setAttribute("dataset", "");
  });
}
function startPlay() {
  const playNowEl = document.querySelector(".play-now");
  if (!playNowEl) return;
  playNowEl.addEventListener("click", function () {
    RecipeView.viewChoose(document.querySelector(".choose-hand"));
  });
}
