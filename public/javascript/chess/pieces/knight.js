var Knight = function(config) {
    this.type = 'knight';
    this.constructor(config);
  };
  
  Knight.prototype = new Piece({});
  
  Knight.prototype.validateMove = function(targetPosition, board) {
    const curRow = this.position.charCodeAt(1) - 0;
    const curCol = this.position.charCodeAt(0) - 64;
    const tarRow = targetPosition.row.charCodeAt(0) - 0;
    const tarCol = targetPosition.col.charCodeAt(0) - 64;
  
    const rowDiff = Math.abs(tarRow - curRow);
    const colDiff = Math.abs(tarCol - curCol);
  
    if (!((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2))) {
      return false;
    }
  
    const targetPiece = board.getPieceAt(targetPosition);
    if (targetPiece && targetPiece.color === this.color) {
      return false;
    }
  
    return true;
  };
  