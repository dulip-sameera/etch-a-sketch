const mainSection = document.getElementById("main");
const sideBar = document.getElementById("side-bar");
const canvas = document.getElementById("canvas");
const sliderValue = document.getElementById("slider-value");
const canvasSize = document.getElementById("canvas-size");
const btnSetDefaultColor = document.getElementById("default-colors");
const btnSetRandomColors = document.getElementById("random-colors");
const btnErase = document.getElementById("erase");
const btnClear = document.getElementById("clear");

const DEFAULT_COLOR = "#000";
const DEFAULT_BACKGROUND_COLOR = "#ccc";
const randomColors = [
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

// this will generate the canvas for the first time using the default values
// if this is not present canvas will not have any pixels until the user changes the slide value
window.onload = function () {
  generateCanvasPixels(canvas);
  draw(DEFAULT_COLOR);
};

// use random colors(defined in the randomColors array) when hovering over the divs
btnSetRandomColors.addEventListener("click", () => {
  draw(randomColors, true);
});

// set the default color
btnSetDefaultColor.addEventListener("click", () => {
  draw(DEFAULT_COLOR);
});

// when hovering, set the background color to default one
// act as an eraser
btnErase.addEventListener("click", () => {
  draw(DEFAULT_BACKGROUND_COLOR);
});

// clear the whole canvas
btnClear.addEventListener("click", () => {
  for (let i = 0; i < canvas.childElementCount; i++) {
    canvas.childNodes[i].style.backgroundColor = DEFAULT_BACKGROUND_COLOR;
  }
});

// set the canvas size
canvasSize.addEventListener("input", () => {
  // output the canvas size to the user
  sliderValue.textContent = `${canvasSize.value} x ${canvasSize.value}`;
  generateCanvasPixels(canvas, canvasSize.value);
  console.log(canvasSize.value);
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

function draw(backgroundColor, randomColors = false) {
  canvas.addEventListener("mouseover", (e) => {
    //this if statement ignores the canvas when hovering
    // only selects the divs inside the canvas div
    if (e.target.id !== "canvas") {
      if (randomColors === false) {
        e.target.style.backgroundColor = backgroundColor;
      } else {
        e.target.style.backgroundColor = getRandomColor(backgroundColor);
        randomColors == true;
      }
    }
    console.log(e);
  });
}

function getRandomColor(colors) {
  return colors[Math.floor(Math.random() * 9)];
}
