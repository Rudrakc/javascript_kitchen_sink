var Pawn = function (config) {
  this.type = "pawn";
  this.constructor(config);
  this.firstMoveMade = false;
};

Pawn.prototype = new Piece({});

Pawn.prototype.validateMove = function (targetPosition, board) {
  const curRow = this.position.charCodeAt(1) - 1;
  const curCol = this.position.charCodeAt(0) - 64;
  const tarRow = targetPosition.row.charCodeAt(0) - 1;
  const tarCol = targetPosition.col.charCodeAt(0) - 64;
  // console.log("curRow: " + curRow +" tarrow: " + tarRow);

  const targetPiece = board.getPieceAt(targetPosition);
  const rowDiff = this.color === "white" ? tarRow - curRow : curRow - tarRow;
  const colDiff = Math.abs(tarCol - curCol);
  // console.log(this.color);
  // console.log("rowdif " + rowDiff + "coldif " + colDiff);

  let canMove = false;
  if (tarCol === curCol) {
    if (rowDiff === 1 && targetPiece === false) canMove = true;
    if (rowDiff === 2 && !this.firstMoveMade) {
      const pathBlockRow = this.color === "white" ? curRow + 1 : curRow - 1;
      // Checking if a piece exists in the way
      const pathBlock = board.getPieceAt({
        row: "" + pathBlockRow,
        col: targetPosition.col,
      });
      if (pathBlock === false) canMove = true;
    }
  }
  else if(rowDiff === 1 && colDiff === 1) {
    if(targetPiece) canMove = true;
  }

  if (canMove && this.firstMoveMade === false) this.firstMoveMade = true;
  return canMove;
};
