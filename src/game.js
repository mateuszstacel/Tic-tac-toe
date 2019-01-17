var square1;
var square2;
var square3;
var square4;
var square5;
var square6;
var square7;
var square8;
var square9;
var player_1_move = true
var player_2_move = false

function Tictac() {
};

Tictac.prototype.choice = function(squareNumber) {
  if (player_1_move === true) {
    moves.push("x")
    player_1_move = false
    player_2_move = true
  } else if (player_2_move === true){
    moves.push("o")
    player_2_move = false
    player_2_move = true
  };
};

Tictac.prototype.assignToSquare = function(number){
  if(player_1_move === true) {
    $('#div'+number+'').text("x");
    player_1_move = false
    player_2_move = true
  }else if(player_2_move === true) {
    $('#div'+number+'').text("o");
    player_1_move = true
    player_2_move = false
  };
};
