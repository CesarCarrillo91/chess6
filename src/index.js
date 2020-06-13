const chessboard = document.querySelector(".chessboard");
const cells = chessboard.querySelectorAll("td");
const gameRules = {
  dimensions: {
    cells: 23,
    rows: 14
  },
  emptyCells: [
    {
      x: 0,
      y: 0
    },
    {
      x: 0,
      y: 1
    },
    {
      x: 0,
      y: 2
    },
    {
      x: 0,
      y: 11
    },
    {
      x: 0,
      y: 12
    },
    {
      x: 0,
      y: 13
    },
    {
      x: 1,
      y: 0
    },
    {
      x: 1,
      y: 1
    },
    {
      x: 1,
      y: 2
    },
    {
      x: 1,
      y: 11
    },
    {
      x: 1,
      y: 12
    },
    {
      x: 1,
      y: 13
    },
    {
      x: 2,
      y: 0
    },
    {
      x: 2,
      y: 1
    },
    {
      x: 2,
      y: 2
    },
    {
      x: 2,
      y: 11
    },
    {
      x: 2,
      y: 12
    },
    {
      x: 2,
      y: 13
    },
    {
      x: 11,
      y: 0
    },
    {
      x: 11,
      y: 1
    },
    {
      x: 11,
      y: 2
    },
    {
      x: 11,
      y: 11
    },
    {
      x: 11,
      y: 12
    },
    {
      x: 11,
      y: 13
    },
    {
      x: 20,
      y: 0
    },
    {
      x: 20,
      y: 1
    },
    {
      x: 20,
      y: 2
    },
    {
      x: 20,
      y: 11
    },
    {
      x: 20,
      y: 12
    },
    {
      x: 20,
      y: 13
    },
    {
      x: 21,
      y: 0
    },
    {
      x: 21,
      y: 1
    },
    {
      x: 21,
      y: 2
    },
    {
      x: 21,
      y: 11
    },
    {
      x: 21,
      y: 12
    },
    {
      x: 21,
      y: 13
    },
    {
      x: 22,
      y: 0
    },
    {
      x: 22,
      y: 1
    },
    {
      x: 22,
      y: 2
    },
    {
      x: 22,
      y: 11
    },
    {
      x: 22,
      y: 12
    },
    {
      x: 22,
      y: 13
    }
  ]
};
let selectedPiece;

chessboard.addEventListener("click", event => {
  const { target } = event;
  const isPiece = target.tagName === "I";

  if (isPiece && !selectedPiece) {
    const { className, parentElement: cell } = target;
    const { cellIndex: x, classList, parentElement: row } = cell;
    const { rowIndex: y } = row;
    console.log(x, y);

    if (className.includes("pawn")) {
      classList.toggle("active");
      selectedPiece = classList.contains("active") ? target : undefined;
    }
  } else {
    if (!selectedPiece) return event.preventDefault();

    const cell = isPiece ? target.parentElement : target;
    const { cellIndex: x, parentElement: row } = cell;
    const { rowIndex: y } = row;
    const index = x + y * gameRules.dimensions.cells;
    const destination = cells[index];
    const isEmptyCell = Object.values(gameRules.emptyCells).find(coordinate => {
      return coordinate.x === x && coordinate.y === y;
    });

    if (isEmptyCell) return event.preventDefault();
    selectedPiece.parentElement.classList.remove("active");

    console.log(target);

    destination.innerHTML = "";
    destination.appendChild(selectedPiece);
    selectedPiece = undefined;
  }
});
