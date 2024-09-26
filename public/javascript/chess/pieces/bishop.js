var Bishop = function(config){
    this.type = 'bishop';
    this.constructor(config);
};



Bishop.prototype = new Piece({});
Bishop.prototype.validateMove = function(targetPosition, board){

    // TODO: Ayush Kesharwani complete this functionality
     // Convert current position to row and column
    let currentCol = this.position.charAt(0);
    let currentRow = parseInt(this.position.charAt(1));
    
    let targetCol = targetPosition.col;
    let targetRow = parseInt(targetPosition.row);

    // Check if the move is diagonal
    if (Math.abs(targetCol.charCodeAt(0) - currentCol.charCodeAt(0)) === Math.abs(targetRow - currentRow)) {
        // Diagonal movement is valid if row and column move distances are equal
        return true;
    }

    // If the move is not diagonal, it's invalid for a bishop
    console.warn("Invalid move for bishop");
    return false;

}
