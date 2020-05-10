const chessboard = document.querySelector(".chessboard");
const cells = chessboard.querySelectorAll("td");
const gameRules = {
  dimensions: {
    cells: 22,
    rows: 12
  },
  emptyCells: ["00", "10", "01", "11"]
};
let selectedPiece;

chessboard.addEventListener("click", event => {
  const { target } = event;
  const isPiece = target.tagName === "I";

  if (isPiece) {
    const { className, parentElement: cell } = target;
    const { cellIndex: x, classList, parentElement: row } = cell;
    const { rowIndex: y } = row;
    console.log(x, y);

    if (className.includes("pawn")) {
      classList.toggle("active");
      selectedPiece = classList.contains("active") ? target : undefined;
    }
  } else {
    if (!selectedPiece) return;

    const cell = target;
    const { cellIndex: x, parentElement: row } = cell;
    const { rowIndex: y } = row;
    const coordinates = "" + x + y;
    const index = x + y * gameRules.dimensions.cells;

    if (gameRules.emptyCells.includes(coordinates)) return;

    selectedPiece.parentElement.classList.remove("active");
    cells[index].appendChild(selectedPiece);
    selectedPiece = undefined;
  }
});
