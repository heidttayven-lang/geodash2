const canvas = document.getElementById("game");

if (!canvas) {
  throw new Error("Canvas not found in editor.js");
}

const ctx = canvas.getContext("2d");

// Example editor state
let objects = [];

function addObject(x, y) {
  objects.push({ x, y });
}

// Example draw loop for editor tools
function drawEditor() {
  ctx.fillStyle = "white";

  for (let obj of objects) {
    ctx.fillRect(obj.x, obj.y, 10, 10);
  }
}
