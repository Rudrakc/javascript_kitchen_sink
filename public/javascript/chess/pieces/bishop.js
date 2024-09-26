var Bishop = function(config){
    this.type = 'bishop';
    this.constructor(config);
};



Bishop.prototype = new Piece({});
Bishop.prototype.validateMove = function(targetPosition, board){

    // TODO: Ayush Kesharwani complete this functionality

}

Bishop.prototype.moveTo = function(newPosition){
    if(this.isValidPosition(newPosition)){
        this.position = newPosition.col + newPosition.row;
        this.render();
    }else{
        // No operation if the move is invalid
    }
}
