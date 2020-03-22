const chessboard = document.querySelector(".chessboard");
const cells = chessboard.querySelector("td");
const icon = document.querySelector(".fas");

const game = [];

icon.addEventListener("click", event => {
  icon.parentElement.classList.toggle("active");
});
