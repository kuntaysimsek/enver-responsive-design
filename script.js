const playIcon = document.getElementsByClassName("video-player-icon");
const player = document.getElementsByClassName("video-box");
const playIconWidth = playIcon[0].clientWidth;
const playIconHeight = playIcon[0].clientHeight;
const body = document.body;
let animation = true;


let x = 0;
let y = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.08;

function animate() {
  if (!animation) {
    returnCenterPlayIcon();
  }

  let distX = x - ballX;
  let distY = y - ballY;

  ballX = ballX + distX * speed;
  ballY = ballY + distY * speed;

  playIcon[0].style.top = `${ballY}px`;
  playIcon[0].style.left = `${ballX}px`;

  requestAnimationFrame(animate);
}

animate();

function detectCoords(event) {
  x = event.pageX - player[0].offsetLeft - playIconWidth / 2;
  y = event.y - player[0].getBoundingClientRect().y - playIconHeight / 2;
}

function playerAnimationStart() {
  animation = true;
}

function playerAnimationEnd() {
  animation = false;
}

body.onload = function(){
  returnCenterPlayIcon();
 }

function returnCenterPlayIcon() {
  x = (player[0].clientWidth / 2) - (playIconWidth / 2);
  y = (player[0].clientHeight / 2) - (playIconHeight / 2);
}

const btn = document.querySelector(".nav-menu-button");

btn.addEventListener("click", () => {
  document.body.classList.toggle("scroll-block");
  document.querySelector(".box").classList.toggle("open");
  document.querySelector(".rectangle--top").classList.toggle("open");
  document.querySelector(".rectangle--middle").classList.toggle("open");
  document.querySelector(".rectangle--bottom").classList.toggle("open");
});