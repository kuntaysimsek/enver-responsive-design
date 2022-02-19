const playIcon = document.getElementsByClassName("video-player-icon");
const player = document.getElementsByClassName("video-box");
const playIconWidth = playIcon[0].clientWidth;
const playIconHeight = playIcon[0].clientHeight;

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

function returnCenterPlayIcon() {
  x = (player[0].clientWidth / 2) - (playIconWidth / 2);
  y = (player[0].clientHeight / 2) - (playIconHeight / 2);
}

// slider //

const slider = document.getElementsByClassName("slider-items");
const sliderItem = document.getElementsByClassName("slider-item");
const sliderItemWidth = sliderItem[0].clientWidth;

let startx = 0;
let sliderX = 0;
let dragScrollLeft = 0;
let pressed = false;

function mouseDown(e) {
  if (e.which == 0) {
    startx = e.touches[0].pageX - slider[0].offsetLeft;
  } else {
    startx = e.pageX - slider[0].offsetLeft;
  }
  pressed = true;
  dragScrollLeft = slider[0].scrollLeft;
}
function mouseUp() {
  pressed = false;
}
function mouseLeave() {
  pressed = false;
}
function mouseMove(e) {
    if (!pressed) return;
    if (e.which == 0) {
      sliderX = e.touches[0].pageX - slider[0].offsetLeft;
    } else {
      sliderX = e.pageX - slider[0].offsetLeft;
    }
    const walk = sliderX - startx;
    slider[0].scrollLeft = dragScrollLeft - walk; 
}

const btn = document.querySelector(".nav-menu-button");

btn.addEventListener("click", () => {
  console.log("tik");
  document.querySelector(".box").classList.toggle("open");
  document.querySelector(".rectangle--top").classList.toggle("open");
  document.querySelector(".rectangle--middle").classList.toggle("open");
  document.querySelector(".rectangle--bottom").classList.toggle("open");
});