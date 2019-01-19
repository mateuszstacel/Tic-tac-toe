var player_1_move = true
var player_2_move = false
var grid = [[null, null, null], [null, null, null], [null, null, null]];
var check = 0
var player_name = ''

function Tictac() {
};

Tictac.prototype.score = function() {
  for(i = 0; i <= 2; i++){
    if (grid[i][0] != null && grid[i][0] === grid[i][1] && grid[i][1] === grid[i][2]){
      this.printWinner();
    }if (grid[0][i] != null && grid[0][i] === grid[1][i] && grid[1][i] === grid[2][i]){
      this.printWinner();
   }if (grid[0][0] != null && grid[0][0] === grid[1][1] && grid[1][1] === grid[2][2]){
     this.printWinner();
   }if (grid[0][2] != null && grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0]){
     this.printWinner();
   };
 };
};

Tictac.prototype.choice = function(index1, index2) {
  if (player_1_move === true) {
    player_name = "o"
    grid[index1][index2] = "o"
  }else if (player_2_move === true){
    player_name = "x"
    grid[index1][index2] = "x"
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


Tictac.prototype.draw = function() {
  if (check === 8){
    $('#result').text("Draw");
    $('#new-game').show()
  }else {
  check +=1
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

  Tictac.prototype.stopEachBtn= function(number) {
    $('#square'+number+'').attr("disabled", true);
  };

  Tictac.prototype.printWinner = function() {
    $('#result').text('Player with ' +player_name+ ' won');
    $('#new-game').show()
    this.disableAllBtn()
  };

  Tictac.prototype.disableAllBtn= function() {
    for (i = 1; i <= 9; i++)
    $('#square'+i+'').attr("disabled", true);
  };
