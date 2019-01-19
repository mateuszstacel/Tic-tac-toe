var tictac = new Tictac();

$(document).ready(function() {
  $('#new-game').hide()

$('#square1').click(function() {
  tictac.assignToSquare(1)
  tictac.choice(0, 0)
  tictac.stopEachBtn(1)
  tictac.draw()
  tictac.score()

});

$('#square2').click(function() {
  tictac.assignToSquare(2)
  tictac.choice(0, 1)
  tictac.stopEachBtn(2)
  tictac.draw()
  tictac.score()
});

$('#square3').click(function() {
  tictac.assignToSquare(3)
  tictac.choice(0, 2)
  tictac.stopEachBtn(3)
  tictac.draw()
  tictac.score()
});

$('#square4').click(function() {
  tictac.assignToSquare(4)
  tictac.choice(1, 0)
  tictac.stopEachBtn(4)
  tictac.draw()
  tictac.score()
});

$('#square5').click(function() {
  tictac.assignToSquare(5)
  tictac.choice(1, 1)
  tictac.stopEachBtn(5)
  tictac.draw()
  tictac.score()
});

$('#square6').click(function() {
  tictac.assignToSquare(6)
  tictac.choice(1, 2)
  tictac.stopEachBtn(6)
  tictac.draw()
  tictac.score()
});

$('#square7').click(function() {
  tictac.assignToSquare(7)
  tictac.choice(2, 0)
  tictac.stopEachBtn(7)
  tictac.draw()
  tictac.score()
});

$('#square8').click(function() {
  tictac.assignToSquare(8)
  tictac.choice(2, 1)
  tictac.stopEachBtn(8)
  tictac.draw()
  tictac.score()
});

$('#square9').click(function() {
  tictac.assignToSquare(9)
  tictac.choice(2, 2)
  tictac.stopEachBtn(9)
  tictac.draw()
  tictac.score()
});

$('#new-game').click(function() {
  location.reload()
});

});
