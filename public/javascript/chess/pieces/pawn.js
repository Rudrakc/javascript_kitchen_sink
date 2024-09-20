var Pawn = function (config) {
  this.type = "pawn";
  this.constructor(config);
  this.firstMoveMade = false;
};

Pawn.prototype = new Piece({});

Pawn.prototype.validateMove = function (targetPosition, board) {
  const curRow = this.position.charCodeAt(1) - 48;
  const curCol = this.position.charCodeAt(0) - 65;
  const tarRow = targetPosition.row.charCodeAt(0) - 48;
  const tarCol = targetPosition.col.charCodeAt(0) - 65;

  const targetPiece = board.getPieceAt(targetPosition);
  const rowDiff = this.color === "white" ? tarRow - curRow : curRow - tarRow;
  const colDiff = Math.abs(tarCol - curCol);

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
