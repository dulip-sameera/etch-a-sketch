const container = document.getElementById("container");
const sideBar = document.getElementById("side-bar");
const canvas = document.getElementById("canvas");
const sliderValue = document.getElementById("slider-value");
const canvasSize = document.getElementById("canvas-size");

const DEFAULT_COLOR = "#000";

canvasSize.addEventListener("input", () => {
  sliderValue.textContent = `${canvasSize.value} x ${canvasSize.value}`;
  generateCanvasPixels(canvas, canvasSize.value);
  console.log(canvasSize.value);
});

window.onload = function () {
  generateCanvasPixels(canvas);
};

canvas.addEventListener("mouseover", (e) => {
  if (e.target.id !== "canvas") {
    draw(e.target);
  }
  console.log(e);
});

function generateCanvasPixels(canvas, noOfColumnsPerSide = 16) {
  canvas.setAttribute("class", "");
  canvas.innerHTML = "";
  // add the grid class to canvas
  canvas.classList.add(`grid-${noOfColumnsPerSide}`);
  // create the pixels in the canvas
  for (let i = 0; i < noOfColumnsPerSide ** 2; i++) {
    const div = document.createElement("div");
    canvas.appendChild(div);
  }
}

function draw(element, backgroundColor = DEFAULT_COLOR) {
  element.style.backgroundColor = backgroundColor;
}
