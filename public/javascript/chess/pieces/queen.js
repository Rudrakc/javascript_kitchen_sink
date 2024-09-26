var Queen = function(config) {
    this.type = 'queen';
    this.position = config.position;
};

Queen.prototype = new Piece({});

Queen.prototype.validateMove = function(targetPosition, board) {
    const curRow = this.position[1];
    const curCol = this.position.charCodeAt(0);
    const tarRow = targetPosition.row;
    const tarCol = targetPosition.col.charCodeAt(0);

    const rowDiff = Math.abs(tarRow - curRow);
    const colDiff = Math.abs(tarCol - curCol);

    if (curRow === tarRow || curCol === tarCol) {
        return this.isPathClearStraight(curRow, curCol, tarRow, tarCol, board);
    }

    if (rowDiff === colDiff) {
        return this.isPathClearDiagonal(curRow, curCol, tarRow, tarCol, board);
    }

    return false;
};

Queen.prototype.isPathClearStraight = function(curRow, curCol, tarRow, tarCol, board) {
    if (curRow === tarRow) {

        const step = curCol < tarCol ? 1 : -1;
        for (let col = curCol + step; col !== tarCol; col += step) {
            if (board.getPieceAt(curRow, String.fromCharCode(col))) {
                return false;
            }
        }
    } else {

        const step = curRow < tarRow ? 1 : -1;
        for (let row = curRow + step; row !== tarRow; row += step) {
            if (board.getPieceAt(row, String.fromCharCode(curCol))) {
                return false;
            }
        }
    }
    return true;
};


Queen.prototype.isPathClearDiagonal = function(curRow, curCol, tarRow, tarCol, board) {
    const rowStep = curRow < tarRow ? 1 : -1;
    const colStep = curCol < tarCol ? 1 : -1;
    let row = curRow + rowStep;
    let col = curCol + colStep;

    while (row !== tarRow && col !== tarCol) {
        if (board.getPieceAt(row, String.fromCharCode(col))) {
            return false;
        }
        row += rowStep;
        col += colStep;
    }
    return true;
};
