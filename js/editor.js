let editorMode = false;

document.addEventListener("keydown", e => {
  if (e.code === "KeyE") {
    editorMode = !editorMode;
  }
});

canvas.addEventListener("click", e => {
  if (!editorMode) return;

  objects.push({
    x: e.clientX,
    y: e.clientY,
    w: 40,
    h: 40,
    type: "spike"
  });
});
