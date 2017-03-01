//Business Logic

var turnScore = 0;
var turnIndex = 0;

function Player(inputName, score) {
  this.userName = inputName;
  this.score = score;
}

Player.prototype.roll = function() {
  var rollResult = Math.floor(Math.random() * 6) + 1;  //rolling the dice

  if (rollResult === 1) {
    turnScore = 0;
    updateDisplay(rollResult);
    nextTurn();  //next turn and no score
  } else {
    turnScore += rollResult;
    updateDisplay(rollResult);
  }
}

Player.prototype.hold = function() {
  this.score += turnScore;
  // updateDisplay();
}

var nextTurn = function() {
  alert("NEXT TURN");
  turnScore = 0;
  if (turnIndex === 0) {
    turnIndex = 1;
  } else {
    turnIndex = 0;
  }
};

var Player1 = new Player(prompt("Player 1, enter your name."), 0);
var Player2 = new Player(prompt("Player 2, enter your name."), 0);
var Players = [Player1, Player2];

var updateDisplay = function(rollResult) {
  $("#player-roll-result" + turnIndex).text(rollResult);
  $("#player-turn-total" + turnIndex).text(turnScore);
}

$(document).ready(function() {
  $("#player-name0").text(Player1.userName);
  $("#player-name1").text(Player2.userName);

  $("#player-roll-butt" + turnIndex).click(function() {
    Players[turnIndex].roll();
  });

  $("#player-hold-butt" + turnIndex).click(function() {

    Players[turnIndex].hold();
    $("#player-total" + turnIndex).text(Players[turnIndex].score);
    $("#player-turn-total" + turnIndex).text("0");
    $("#player-roll-result" + turnIndex).text("0");

    nextTurn();
  });
});
