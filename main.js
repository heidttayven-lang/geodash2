const canvas = document.getElementById("game");

if (!canvas) {
  throw new Error("Canvas not found! Check index.html id='game'");
}

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let keys = {};
let speed = 6;

document.addEventListener("keydown", e => keys[e.code] = true);
document.addEventListener("keyup", e => keys[e.code] = false);

// 🔥 TEMP FUNCTIONS (prevents crashes)
function updatePlayer() {}
function updateLevel() {}
function updatePortals() {}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  updatePlayer();
  updateLevel();
  updatePortals();

  requestAnimationFrame(gameLoop);
}

gameLoop();
