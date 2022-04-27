import { playActive, countTime } from "./active.js";
class RecipeView {
  parentBodyEl = document.querySelector(".wrap-body");
  score = 0;
  data;
  dataRandom;
  viewChoose(data) {
    this.data = data.parentNode.getAttribute("dataset");
    this.#resetViewChoose();
    this.personChoose();
    this.robotChoose();
    this.handlerWinLose();
  }
  personChoose() {
    const markup = `
    <h1>YOU PICKED</h1>
    <div id="hand" class="${this.data}">
      <img src="image/${this.data}.png" class="choose-hand"/>
    </div>
    `;
    const containPersonChoose = document.createElement("div");
    containPersonChoose.innerHTML = markup;
    containPersonChoose.setAttribute("class", "personChoose");
    this.parentBodyEl.appendChild(containPersonChoose);
  }
  robotChoose() {
    const randomRobot = ["rock", "paper", "scissors"];
    this.dataRandom = randomRobot[Math.floor(Math.random() * 3)];
    const markup = `
      <h1>THE ROBOT PICKED</h1>
      <div id="hand" class="${this.dataRandom}">
        <img src="image/${this.dataRandom}.png" class="choose-hand"/>
      </div>
    `;
    const containRobotChoose = document.createElement("div");
    containRobotChoose.innerHTML = markup;
    containRobotChoose.setAttribute("class", "robotChoose");
    this.parentBodyEl.appendChild(containRobotChoose);
  }
  #resetViewChoose() {
    this.parentBodyEl.innerHTML = " ";
    document.querySelector(".wrap-active-game").remove();
  }
  handlerWinLose() {
    const results = JSON.stringify([this.data, this.dataRandom]);
    const resultsReverse = JSON.stringify(
      [this.data, this.dataRandom].reverse()
    );
    const case1 = JSON.stringify(["rock", "paper"]);
    const case2 = JSON.stringify(["rock", "scissors"]);
    const case3 = JSON.stringify(["paper", "scissors"]);
    if (results === case1 || resultsReverse === case1) {
      [this.data, this.dataRandom].forEach((el, index) => {
        if (el === "paper") {
          if (index === 0) {
            this.viewWinLose("YOU WIN");
          } else this.viewWinLose("YOU LOSE");
        }
      });
    } else if (results === case2 || resultsReverse === case2) {
      [this.data, this.dataRandom].forEach((el, index) => {
        if (el === "rock") {
          if (index === 0) {
            this.viewWinLose("YOU WIN");
          } else this.viewWinLose("YOU LOSE");
        }
      });
    } else if (results === case3 || resultsReverse === case3) {
      [this.data, this.dataRandom].forEach((el, index) => {
        if (el === "scissors") {
          if (index === 0) {
            this.viewWinLose("YOU WIN");
          } else this.viewWinLose("YOU LOSE");
        }
      });
    } else this.viewWinLose("EQUAL");
  }
  viewWinLose(data) {
    if (data === "YOU WIN") {
      this.score++;
      this.handlerScore(this.score);
    } else if (data === "YOU LOSE") {
      if (this.score === 0) {
        this.score = 0;
      } else {
        this.score--;
      }
      this.handlerScore(this.score);
    }
    const markup = `
    <div class="contain-playing">
      <h1>${data}</h1>
      <button>PLAY AGAIN</button>
    </div>
    `;
    const containResult = document.createElement("div");
    containResult.setAttribute("class", "wrap-playing");
    containResult.innerHTML = markup;
    document.body.appendChild(containResult);
    this.playAgain();
  }
  playAgain() {
    const markup = ` 
    <div id="hand" class="rock">
      <img src="image/rock.png" />
    </div>
    <div id="hand" class="paper">
      <img src="image/paper.png" />
    </div>
    <div id="hand" class="scissors">
      <img src="image/scissors.png" />
    </div>
    `;
    document
      .querySelector(".contain-playing > button")
      .addEventListener("click", function () {
        document.querySelector(".wrap-body").innerHTML = markup;
        document.querySelector(".wrap-playing").remove();
        clearInterval(countTime);
        playActive();
      });
  }
  handlerScore(data) {
    document.querySelector(".contain-score > h1").textContent = data;
  }
}
export default new RecipeView();
