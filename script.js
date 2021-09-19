// "use strict";
const breakMinutes = 5;
const workMinutes = 25;

let time = workMinutes * 60;

const countdownEl = document.getElementById("countdown");
const startStop = document
  .getElementById("start-stop")
  .addEventListener("click", startStopFuncion1);

function startStopFuncion1() {
  let startStop1 = document.getElementById("start-stop");
  if (startStop1.src.match("graphics//button-play.png")) {
    startStop1.src = "graphics//button-pause.png";
  } else {
    startStop1.src = "graphics//button-play.png";
  }

  //TO DO!
  //zamiana grafiki PLAY -> PAUSE on lick - done
  //zamiana grafiki PAUSE -> PLAY on secondlick - done
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

// EXAMPLES OF CODE TO USE
