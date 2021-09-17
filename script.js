// "use strict";
const breakMinutes = 5;
const workMinutes = 25;

let time = workMinutes * 60;

const countdownEl = document.getElementById("countdown");
const startStop = document
  .getElementById("start-stop")
  .addEventListener("click", startStopFuncion);

function startStopFuncion() {
  //TO DO!
  //zamiana grafiki PLAY -> PAUSE
  //zamiana napisu FOCUS -> PAUSE
  //zatrzymanie funkcji ODLICZANIE na PAUZE
}

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
}
