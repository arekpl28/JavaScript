const hands = [...document.querySelectorAll('.select img')];
const btn = document.querySelector('button.start');
const whoWin = document.querySelector('[data-summary="who-win"]');

const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
}

const game = {
  playerHand: "",
  aiHand: "",
}

function handSelection() {
  game.playerHand = this.dataset.option;
  hands.forEach(hand => hand.style.boxShadow = '');
  this.style.boxShadow = '0 0 0 4px red';
  whoWin.textContent = "";
  document.querySelector('[data-summary="your-choice"]').textContent = "";
  document.querySelector('[data-summary="ai-choice"]').textContent = "";
}

function aiChoice() {
  const index = Math.floor(Math.random() * hands.length)
  const aiHand = hands[index].dataset.option
  return aiHand
}

function checkResult(player, ai) {
  if (player === ai) {
    return "draw"
  } else if ((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper")) {
    return "win"
  } else {
    return "loss"
  }
}

function publishResult(player, ai, result) {
  document.querySelector('[data-summary="your-choice"]').textContent = player
  document.querySelector('[data-summary="ai-choice"]').textContent = ai
  document.querySelector('p.numbers span').textContent = ++gameSummary.numbers

  if (result === "win") {
    document.querySelector('p.wins span').textContent = ++gameSummary.wins
    whoWin.textContent = "You!!!";
    whoWin.style.color = "green"
  } else if (result === "loss") {
    document.querySelector('p.losses span').textContent = ++gameSummary.losses
    whoWin.textContent = "Computer :(";
    whoWin.style.color = "red"
  } else {
    document.querySelector('p.draws span').textContent = ++gameSummary.draws
    whoWin.textContent = "Draw :\\";
    whoWin.style.color = "blue"
  }
}

function endGame() {
  document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
  game.playerHand = "";
  game.aiHand = "";
}

function startGame() {
  if (!game.playerHand) {
    alert("Choose a hand!!!!")
    return
  }
  game.aiHand = aiChoice()
  const gameResult = checkResult(game.playerHand, game.aiHand);
  publishResult(game.playerHand, game.aiHand, gameResult);
  endGame();
}

hands.forEach(hand => hand.addEventListener('click', handSelection));

btn.addEventListener('click', startGame);