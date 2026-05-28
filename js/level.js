function updateLevel() {

  ctx.fillStyle = "red";

  for (let obj of objects) {
    obj.x -= speed;

    if (obj.type === "block") ctx.fillStyle = "white";
    else ctx.fillStyle = "red";

    ctx.fillRect(obj.x, obj.y, obj.w, obj.h);

    // collision
    if (
      player.x < obj.x + obj.w &&
      player.x + 40 > obj.x &&
      player.y < obj.y + obj.h &&
      player.y + 40 > obj.y
    ) {
      location.reload();
    }
  }
}
