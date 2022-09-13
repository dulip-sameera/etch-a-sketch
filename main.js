const container = document.getElementById("container");
const sideBar = document.getElementById("side-bar");
const canvas = document.getElementById("canvas");

generateCanvasPixels(canvas);

canvas.addEventListener("mouseover", (e) => {
  if (e.target.id !== "canvas") {
    draw(e.target, "red");
  }
  console.log(e);
});

function generateCanvasPixels(canvas, noOfColumnsPerSide = 8) {
  // add the grid class to canvas
  canvas.classList.add(`grid-${noOfColumnsPerSide}`);
  // create the pixels in the canvas
  for (let i = 0; i < noOfColumnsPerSide ** 2; i++) {
    const div = document.createElement("div");
    canvas.appendChild(div);
  }
}

function draw(element, backgroundColor = "red") {
  element.style.backgroundColor = backgroundColor;
}
