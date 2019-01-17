var tictac = new Tictac();

$(document).ready(function() {

$('#square1').click(function() {
  tictac.assignToSquare(1)
  tictac.choice(0, 0)
});

$('#square2').click(function() {
  tictac.assignToSquare(2)
  tictac.choice(0, 1)
});

$('#square3').click(function() {
  tictac.assignToSquare(3)
  tictac.choice(0, 2)
});

$('#square4').click(function() {
  tictac.assignToSquare(4)
  tictac.choice(1, 0)
});

$('#square5').click(function() {
  tictac.assignToSquare(5)
  tictac.choice(1, 1)
});

$('#square6').click(function() {
  tictac.assignToSquare(6)
  tictac.choice(1, 2)
});

$('#square7').click(function() {
  tictac.assignToSquare(7)
  tictac.choice(2, 0)
});

$('#square8').click(function() {
  tictac.assignToSquare(8)
  tictac.choice(2, 1)
});

$('#square9').click(function() {
  tictac.assignToSquare(9)
  tictac.choice(2, 2)
});

});
