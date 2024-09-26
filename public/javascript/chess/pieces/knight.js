var Knight = function(config) {
    this.type = 'knight';
    this.constructor(config);
};

Knight.prototype = new Piece({});

Knight.prototype.isValidPosition = function(targetPosition) {

    let currentCol = this.position.charAt(0);
    let currentRow = parseInt(this.position.charAt(1));

    let allowedMoves = [
        { col: String.fromCharCode(currentCol.charCodeAt(0) + 2), row: (currentRow + 1).toString() },
        { col: String.fromCharCode(currentCol.charCodeAt(0) + 2), row: (currentRow - 1).toString() },
        { col: String.fromCharCode(currentCol.charCodeAt(0) - 2), row: (currentRow + 1).toString() },
        { col: String.fromCharCode(currentCol.charCodeAt(0) - 2), row: (currentRow - 1).toString() },
        { col: String.fromCharCode(currentCol.charCodeAt(0) + 1), row: (currentRow + 2).toString() },
        { col: String.fromCharCode(currentCol.charCodeAt(0) + 1), row: (currentRow - 2).toString() },
        { col: String.fromCharCode(currentCol.charCodeAt(0) - 1), row: (currentRow + 2).toString() },
        { col: String.fromCharCode(currentCol.charCodeAt(0) - 1), row: (currentRow - 2).toString() },
    ];

    for (let move of allowedMoves) {
        if (move.col === targetPosition.col && move.row === targetPosition.row) {
            return true;
        }
    }

    console.warn("Invalid move for knight");
    return false;
};

Knight.prototype.moveTo = function(targetPosition) {    
    if (this.isValidPosition(targetPosition) && this.Board.turn===this.color) {
        this.position = targetPosition.col + targetPosition.row;
        this.render();
        if(this.color === 'white'){
            this.Board.turn = 'black';
        }else{
            this.Board.turn = 'white';
        }
    } 
};