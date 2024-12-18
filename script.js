const body = document.querySelector("body");

const minion = document.getElementById("minion");

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

function showMsg() {
  minion.style.transform = "scale(0)";
  minion.style.rotate = "720deg";
  document.getElementById("hover-msg").style.opacity = "0";
}

minion.addEventListener("click", showMsg);
