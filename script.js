const containerGrid = document.querySelector(".container");
const slider = document.getElementById("myrange");
const value = document.getElementById("valueForSlider");
const colorBtn = document.getElementById("colorPicker");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");

let currentColor = "#0a0a0a";
let mouseClick = false;
let currentBoardSize = 16;
let eraser = false;

eraserBtn.onclick = () => {
  eraser = !eraser;
};
clearBtn.onclick = () => {
  deleteChild();
  gridConstruction(currentBoardSize);
};
document.body.onmousedown = () => (mouseClick = true);
document.body.onmouseup = () => (mouseClick = false);
colorBtn.oninput = (e) => setCurrentColor(e.target.value);

containerGrid.onmouseleave = containerGrid.onmouseover = handle;

function setCurrentColor(colorChange) {
  currentColor = colorChange;
}

function handle(e) {
  if (e.type == "mouseover" && mouseClick)
    e.target.style.setProperty("background-color", `${currentColor}`);
  if (e.type === "mouseover" && mouseClick && eraser)
    e.target.style.setProperty("background-color", "white");
}

function gridConstruction(number) {
  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      containerGrid.style.setProperty(
        "grid-template-columns",
        `repeat(${number},1fr)`
      );
      containerGrid.appendChild(grid);
    }
  }
}
function deleteChild() {
  let child = containerGrid.lastChild;
  while (child) {
    containerGrid.removeChild(child);
    child = containerGrid.lastChild;
  }
}
slider.addEventListener("input", (e) => {
  currentBoardSize = e.target.value;
  value.textContent = currentBoardSize;
  deleteChild();
  gridConstruction(currentBoardSize);
});
window.onload = () => {
  gridConstruction(currentBoardSize);
};
