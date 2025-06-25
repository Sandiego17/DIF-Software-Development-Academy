const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.getElementById("message");
const resetButton = document.getElementById("reset");

let colors = [];
let pickedColor;

const setupSquares = () => {
  squares.forEach((square) => {
    square.addEventListener("click", () => {
      const clickedColor = square.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor);
        resetButton.textContent = "Play Again?";
      } else {
        square.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  });
};

const resetGame = () => {
  colors = generateRandomColors(squares.length);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colors";

  squares.forEach((square, index) => {
    square.style.display = "block";
    square.style.backgroundColor = colors[index];
  });
};

const changeColors = (color) => {
  squares.forEach((square) => {
    square.style.backgroundColor = color;
  });
};

const pickColor = () => {
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
};

const generateRandomColors = (num) => {
  const array = [];
  for (let i = 0; i < num; i++) {
    array.push(randomColor());
  }
  return array;
};

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const init = () => {
  resetGame();
  setupSquares();
  resetButton.addEventListener("click", resetGame);
};

init();
