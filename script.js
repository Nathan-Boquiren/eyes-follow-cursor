const body = document.querySelector("body");
const minion = document.getElementById("minion");
const gameLink = document.getElementById("guess-number-game-link");

function eyeball() {
  let eyes = document.querySelectorAll(".eye");
  eyes.forEach((eye) => {
    let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
    let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;

    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotate = radian * (180 / Math.PI) * -1 - 270;
    eye.style.transform = `rotate(${rotate}deg)`;
  });
}

body.addEventListener("mousemove", eyeball);
body.addEventListener("touchmove", eyeball);

function hideMinion() {
  minion.style.transform = "scale(0)";
  minion.style.rotate = "720deg";
}

const msg = document.getElementById("hover-msg");
const msgText = document.getElementById("msg");

function toggleMsg(show, message = "") {
  if (show) {
    msg.style.opacity = "1";
    msgText.innerHTML = `<p>${message}</p>`;
  } else {
    msg.style.opacity = "0";
  }
}

minion.addEventListener("click", hideMinion);
minion.addEventListener("mouseover", () => toggleMsg(true, "Don't click me!"));
minion.addEventListener("mouseleave", () => toggleMsg(false));

gameLink.addEventListener("mouseover", () =>
  toggleMsg(true, "Don't click that!")
);
gameLink.addEventListener("mouseleave", () => toggleMsg(false));
