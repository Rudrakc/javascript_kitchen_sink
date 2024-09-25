var Rook = function (config) {
  this.type = "rook";
  this.constructor(config);
};

Rook.prototype = new Piece({});

Rook.prototype.validateMove = function (targetPosition, board) {
  const curRow = this.position.charCodeAt(1) - 0;
  const curCol = this.position.charCodeAt(0) - 64;
  const tarRow = targetPosition.row.charCodeAt(0) - 0;
  const tarCol = targetPosition.col.charCodeAt(0) - 64;

  const rowDiff = Math.abs(tarRow - curRow);
  const colDiff = Math.abs(tarCol - curCol);

  if (rowDiff !== 0 && colDiff !== 0) {
    return false;
  }

  if (!this.isPathClear(curRow, curCol, tarRow, tarCol, board)) {
    return false;
  }

  return true;
};

Rook.prototype.isPathClear = function (curRow, curCol, tarRow, tarCol, board) {
  if (curRow === tarRow) {
    const step = curCol < tarCol ? 1 : -1;
    for (let col = curCol + step; col !== tarCol; col += step) {
      if (
        board.getPieceAt({
          row: String.fromCharCode(0 + curRow),
          col: String.fromCharCode(64 + col),
        })
      ) {
        return false;
      }
    }
  } else if (curCol === tarCol) {
    const step = curRow < tarRow ? 1 : -1;
    for (let row = curRow + step; row !== tarRow; row += step) {
      if (
        board.getPieceAt({
          row: String.fromCharCode(0 + row),
          col: String.fromCharCode(64 + curCol),
        })
      ) {
        return false;
      }
    }
  }
  return true;
};
