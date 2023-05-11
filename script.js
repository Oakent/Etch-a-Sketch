const container = document.getElementById("container");
let slider = document.getElementById("slider");
let current = document.getElementById("currentSize");

const reset = document.getElementById("btnReset");

reset.addEventListener("click", (e) => {
  divs.forEach((square) => {
    square.classList.remove("hovered");
  });
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
      square.classList.add("hovered");
    });
  });
};
