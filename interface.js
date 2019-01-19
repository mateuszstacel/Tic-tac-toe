var tictac = new Tictac();

$(document).ready(function() {

$('#square1').click(function() {
  tictac.score()
  tictac.assignToSquare(1)
  tictac.choice(0, 0)
  tictac.stopEachBtn(1)
});

$('#square2').click(function() {
  tictac.score()
  tictac.assignToSquare(2)
  tictac.choice(0, 1)
  tictac.stopEachBtn(2)
});

$('#square3').click(function() {
  tictac.score()
  tictac.assignToSquare(3)
  tictac.choice(0, 2)
  tictac.stopEachBtn(3)
});

$('#square4').click(function() {
  tictac.score()
  tictac.assignToSquare(4)
  tictac.choice(1, 0)
  tictac.stopEachBtn(4)
});

$('#square5').click(function() {
  tictac.score()
  tictac.assignToSquare(5)
  tictac.choice(1, 1)
  tictac.stopEachBtn(5)
});

$('#square6').click(function() {
  tictac.score()
  tictac.assignToSquare(6)
  tictac.choice(1, 2)
  tictac.stopEachBtn(6)
});

$('#square7').click(function() {
  tictac.score()
  tictac.assignToSquare(7)
  tictac.choice(2, 0)
  tictac.stopEachBtn(7)
});

$('#square8').click(function() {
  tictac.score()
  tictac.assignToSquare(8)
  tictac.choice(2, 1)
  tictac.stopEachBtn(8)
});

$('#square9').click(function() {
  tictac.score()
  tictac.assignToSquare(9)
  tictac.choice(2, 2)
  tictac.stopEachBtn(9)
});

});
