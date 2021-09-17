// "use strict";

const startingMinutes = 25;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  seconds = time % 60;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;
}
