let portals = [
  { x: 700, y: 450, mode: "ship" },
  { x: 1100, y: 450, mode: "wave" },
  { x: 1500, y: 450, mode: "ball" }
];

function updatePortals() {
  ctx.fillStyle = "lime";

  for (let p of portals) {
    p.x -= speed;

    ctx.fillRect(p.x, p.y, 50, 100);

    if (
      player.x < p.x + 50 &&
      player.x + 40 > p.x &&
      player.y < p.y + 100 &&
      player.y + 40 > p.y
    ) {
      player.mode = p.mode;
    }
  }
}
