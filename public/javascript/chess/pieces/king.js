var King = function (config) {

    this.type = "king"; 
    this.constructor(config);
  };

  King.prototype = new Piece({});;
//   King.prototype.constructor = King;

  King.prototype.validateMove = function (targetPosition, board) {
    const currentCol = this.position.charAt(0);
    const currentRow = parseInt(this.position.charAt(1));
    const targetCol = targetPosition.col;
    const targetRow = parseInt(targetPosition.row);
  

    const colDifference = Math.abs(targetCol.charCodeAt(0) - currentCol.charCodeAt(0));
    const rowDifference = Math.abs(targetRow - currentRow);
  
    // The king can move one square in any direction
    if (colDifference <= 1 && rowDifference <= 1) {
      const targetPiece = board.getPieceAt(targetPosition);
      if (targetPiece && targetPiece.color === this.color) {
        console.log("Invalid move: cannot capture your own piece.");
        return false;
      }

      return true;
    } else {
      console.log("Invalid move for King: can only move one square in any direction.");
      return false;
    }
  };


