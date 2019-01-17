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
var array = [[],[],[]];

function Tictac() {
};

Tictac.prototype.choice = function(index1, index2) {
  if (player_1_move === true) {
    array[index1][index2] = "x"
  } else if (player_2_move === true){
    array[index1][index2] = "o"
    player_2_move = false
    player_2_move = true
  };
};

Tictac.prototype.assignToSquare = function(number){
  if(player_1_move === true) {
    $('#div'+number+'').text("x");
    $('#div'+number+'').css("color", "red");
    player_1_move = false
    player_2_move = true
  }else if(player_2_move === true) {
    $('#div'+number+'').text("o");
    $('#div'+number+'').css("color", "blue");
    player_1_move = true
    player_2_move = false
  };
};
