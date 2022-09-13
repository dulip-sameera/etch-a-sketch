const container = document.getElementById("container");
const sideBar = document.getElementById("side-bar");
const canvas = document.getElementById("canvas");
const sliderValue = document.getElementById("slider-value");
const canvasSize = document.getElementById("canvas-size");
const btnSetDefaultColor = document.getElementById("default-colors");
const btnSetRnadomColors = document.getElementById("random-colors");

const DEFAULT_COLOR = "#000";

const $randomColors = [
  "#ffadad",
  "#ffd6a5",
  "#fdffb6",
  "#caffbf",
  "#9bf6ff",
  "#a0c4ff",
  "#bdb2ff",
  "#ffc6ff",
  "#fffffc",
];

// at the beginning color is set to default color
let color = DEFAULT_COLOR;

// this will generate the canvas for the first time using the default values
// if this is not present canvas will not have any pixels until the user changes the slide value
window.onload = function () {
  generateCanvasPixels(canvas);
};

// set the default color
btnSetDefaultColor.addEventListener("click", () => {
  color = DEFAULT_COLOR;
});

// set the canvas size
canvasSize.addEventListener("input", () => {
  // output the canvas size to the user
  sliderValue.textContent = `${canvasSize.value} x ${canvasSize.value}`;
  generateCanvasPixels(canvas, canvasSize.value);
  console.log(canvasSize.value);
});

canvas.addEventListener("mouseover", (e) => {
  //this if statement ignores the canvas when hovering
  // only selects the divs inside the canvas div
  if (e.target.id !== "canvas") {
    draw(e.target, color);
  }
  console.log(e);
});

function generateCanvasPixels(canvas, noOfColumnsPerSide = 16) {
  //remove all the previously added classes to set a new grid size
  canvas.setAttribute("class", "");
  // remove all the children in the canvas to add new ones according the new grid size
  canvas.innerHTML = "";
  // add the grid class to canvas
  canvas.classList.add(`grid-${noOfColumnsPerSide}`);
  // create the pixels in the canvas
  for (let i = 0; i < noOfColumnsPerSide ** 2; i++) {
    const div = document.createElement("div");
    canvas.appendChild(div);
  }
}

function draw(element, backgroundColor) {
  element.style.backgroundColor = backgroundColor;
}
