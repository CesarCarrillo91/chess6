const chessboard = document.querySelector(".chessboard");
const gameRules = [];

chessboard.addEventListener("click", event => {
  const { target } = event;
  const isIcon = target.tagName === "I";

  if (!isIcon) return;

  const { className, parentElement: cell } = target;
  const { cellIndex: x, parentElement: row } = cell;
  const { rowIndex: y } = row;
  console.log(x, y);

  if (className.includes("pawn")) {
    target.parentElement.classList.toggle("active");
  }
});
