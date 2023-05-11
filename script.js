const container = document.getElementById("container");
let slider = document.getElementById("slider");
let current = document.getElementById("currentSize");
const divs = document.querySelectorAll(".grid-element");
const reset = document.getElementById("btnReset");
const colour = document.getElementById("colorpicker");
const btnEraser = document.getElementById("btnEraser");
const btnHold = document.getElementById("mode0");
const btnNohold = document.getElementById("mode1");
const btnRainbow = document.getElementById("btnRainbow");
const btnColour = document.getElementById("btnColour");
let currentColour = colour.value;
let mode = 1;
//mode 0=hold 1=nohold
let mouseDown;
document.body.onmousedown = () => {
  mouseDown = true;
};

document.body.onmouseup = () => {
  mouseDown = false;
};

window.addEventListener("DOMContentLoaded", (e) => {
  createBoard(slider.value);
});

btnHold.addEventListener("click", () => {
  mode = 0;
});

btnNohold.addEventListener("click", () => {
  mode = 1;
});

btnColour.addEventListener("click", () => {
  btnColour.style.classList.add("active");
  btnRainbow.style.classList.remove("active");
  btnEraser.style.classList.remove("active");
  currentColour = colour.value;
});

btnRainbow.addEventListener("click", () => {
  btnColour.style.classList.remove("active");
  btnRainbow.style.classList.add("active");
  btnEraser.style.classList.remove("active");
});

btnEraser.addEventListener("click", () => {
  currentColour = "#ffffff";
  btnColour.style.classList.remove("active");
  btnRainbow.style.classList.remove("active");
  btnEraser.style.classList.add("active");
});

reset.addEventListener("click", (e) => {
  clearBoard();
  createBoard(slider.value);
});

colour.addEventListener("change", () => {
  currentColour = colour.value;
});

slider.addEventListener("input", (e) => {
  current.innerHTML = "Current size: " + slider.value;
  createBoard(slider.value);
});

clearBoard = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

createBoard = (size) => {
  clearBoard();
  for (let i = 0; i < size ** 2; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-element");
    gridSquare.style.width = 800 / size + "px";
    gridSquare.style.height = 800 / size + "px";
    container.appendChild(gridSquare);
  }
  draw();
};

draw = () => {
  const divs = document.querySelectorAll(".grid-element");
  divs.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      if ((mouseDown == true && mode == 0) || mode == 1) {
        square.style.backgroundColor = currentColour;
        square.classList.add("hovered");
      }
    });
  });
};
