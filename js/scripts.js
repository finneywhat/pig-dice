//Business Logic

var turnScore = 0;
var playerOneTotal = 0;

function Player(inputName, score) {
  this.userName = inputName;
  this.score = score;
}

Player.prototype.nextTurn = function () {
  alert("NEXT TURN");
};

var Player1 = new Player(prompt("Player 1, enter your name."), 0);
var Player2 = new Player(prompt("Player 2, enter your name."), 0);

$(document).ready(function() {
  $("#player-one-name").text(Player1.userName);
  $("#player-two-name").text(Player2.userName);

  $("#player-one-roll-butt").click(function() {
    var rollResult = Math.floor(Math.random() * 6) + 1;
    $("#player-one-roll-result").text(rollResult);

    if (rollResult === 1) {
      Player1.nextTurn();
    } else {
      turnScore += rollResult;
      $("#player-one-turn-total").text(turnScore);
    }

  });

  $("#player-one-hold-butt").click(function() {
    playerOneTotal += turnScore;
    // $("#player-one-total").text(playerOneTotal);
    Player1.nextTurn();
  });

});
