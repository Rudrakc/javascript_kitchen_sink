var King = function(config){
    this.type = 'king';
    this.constructor(config);
};



King.prototype = new Piece({});
King.prototype.validateMove = function(targetPosition, board){

    //TODO: Ashwin Saklecha complete this functionality
}