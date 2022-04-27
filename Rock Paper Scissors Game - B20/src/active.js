import { chooseHand, removeChooseHand } from "./play.js";
const activeGameEl = document.querySelector(".contain-solo-robot");
const wrapScoreGameEl = document.querySelector(".contain-header");
const wrapFooterEl = document.querySelector(".wrap-footer");
export function activeGame() {
  const markup = `
    <h3>Score</h3>
    <h1>0</h1>
`;
  const containScore = document.createElement("div");
  containScore.setAttribute("class", "contain-score");
  containScore.innerHTML = markup;
  activeGameEl.addEventListener("click", function () {
    wrapFooterEl.remove();
    playActive();
    wrapScoreGameEl.querySelector(".contain-text").classList.add("active-game");
    wrapScoreGameEl.appendChild(containScore);
  });
}
export function playActive() {
  const markup = `
    <div class="contain-active-game">
      <h1><label>60</label>s</h1>
    </div>
    <button class="play-now">PLAY</button>
  `;
  const containPlayActive = document.createElement("div");
  containPlayActive.setAttribute("class", "wrap-active-game");
  containPlayActive.innerHTML = markup;
  document.body.appendChild(containPlayActive);
  countdownGame();
  chooseHand();
}
export let countTime;
function countdownGame() {
  let timeLeft = 60;
  countTime = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(countTime);
      document.querySelector(".wrap-active-game").remove();
      document.querySelector(".contain-score > h1").textContent = 0;
      loseActiveGame();
    } else {
      if (!document.querySelector(".contain-active-game > h1 > label")) return;
      document.querySelector(".contain-active-game > h1 > label").textContent =
        timeLeft;
    }
    timeLeft--;
  }, 1000);
}
function loseActiveGame() {
  const markup = `
    <div class="contain-lose">
      <h1>YOU BROKE</h1>
      <button>PLAY AGAIN</button>
    </div>
  `;
  const containLoseActive = document.createElement("div");
  containLoseActive.setAttribute("class", "wrap-lose-active");
  containLoseActive.innerHTML = markup;
  document.body.appendChild(containLoseActive);
  playActiveAgain();
}
export function playActiveAgain() {
  document
    .querySelector(".contain-lose > button")
    .addEventListener("click", function () {
      document.querySelector(".wrap-lose-active").remove();
      removeChooseHand();
      playActive();
    });
}
