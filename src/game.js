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
    this.playerOneChoice(number)
    this.playerOneSwitchTurn()
  }else if(player_2_move === true) {
    this.playerTwoChoice(number)
    this.playerTwoSwitchTurn()
  };
};

Tictac.prototype.playerTwoSwitchTurn = function() {
  player_1_move = true
  player_2_move = false
};

Tictac.prototype.playerOneSwitchTurn = function() {
  player_1_move = false
  player_2_move = true
};

Tictac.prototype.playerOneChoice = function(number) {
  $('#div'+number+'').text("x");
  $('#div'+number+'').css("color", "red");
};

Tictac.prototype.playerTwoChoice = function(number) {
  $('#div'+number+'').text("o");
  $('#div'+number+'').css("color", "blue");
};
