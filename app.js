const firstPlayerBtn = document.querySelector(".button-1");
const secondPlayerBtn = document.querySelector(".button-2");
const resetBtn = document.querySelector(".button-reset");
const mainButtons = document.getElementsByClassName("buttons__main-buttons");

const firstPlayerScore = document.querySelector(".card__first-score");
const secondPlayerScore = document.querySelector(".card__second-score");

const select = document.querySelector(".card__select");

firstPlayerBtn.addEventListener("click", () => {
  addScore(firstPlayerScore);
  checkScore(firstPlayerScore, secondPlayerScore);
});

secondPlayerBtn.addEventListener("click", () => {
  addScore(secondPlayerScore);
  checkScore(secondPlayerScore, firstPlayerScore);
});

resetBtn.addEventListener("click", () => {
  reset(firstPlayerScore, secondPlayerScore);
});

const addScore = (score) => {
  score.innerText++;
};

const checkScore = (firstScore, secondScore) => {
  if (parseInt(firstScore.innerText) >= parseInt(select.value)) {
    firstScore.innerText = select.value;

    firstScore.classList.add("winner");
    secondScore.classList.add("loser");

    gameOver();
  }
};

const reset = (firstScore, secondScore) => {
  firstScore.innerText = `0`;
  secondScore.innerText = `0`;

  firstScore.classList.remove("winner", "loser");
  secondScore.classList.remove("winner", "loser");

  for (let button of mainButtons) {
    button.classList.remove("disabled");
  }

  select.selectedIndex = 0;
};

const gameOver = () => {
  for (let button of mainButtons) {
    button.classList.add("disabled");
  }
};
