const player = {
  x: 150,
  y: 300,
  vy: 0,
  gravity: 0.7,
  mode: "cube",
  grounded: false
};

function updatePlayer() {

  // CUBE MODE
  if (player.mode === "cube") {
    player.vy += player.gravity;
    player.y += player.vy;

    if (keys["Space"] && player.grounded) {
      player.vy = -12;
      player.grounded = false;
    }
  }

  // SHIP MODE
  if (player.mode === "ship") {
    if (keys["Space"]) player.vy -= 0.6;
    else player.vy += 0.4;

    player.y += player.vy;
  }

  // WAVE MODE
  if (player.mode === "wave") {
    if (keys["Space"]) player.y -= 8;
    else player.y += 8;
  }

  // BALL MODE
  if (player.mode === "ball") {
    player.vy += player.gravity;
    player.y += player.vy;

    if (keys["Space"]) {
      player.vy *= -1;
    }
  }

  // ground
  if (player.y > 500) {
    player.y = 500;
    player.vy = 0;
    player.grounded = true;
  }

  ctx.fillStyle = "cyan";
  ctx.fillRect(player.x, player.y, 40, 40);
}
