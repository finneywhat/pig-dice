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
    nextTurn();  //next turn and no score
  } else {
    turnScore += rollResult;
  }
  return rollResult;
}

Player.prototype.hold = function() {
  this.score += turnScore;
}

var nextTurn = function() {
  alert("NEXT TURN");
  if (turnIndex === 0) {
    turnIndex = 1;
  } else {
    turnIndex = 0;
  }
  turnScore = 0;
};

var Player1 = new Player(prompt("Player 1, enter your name."), 0);
var Player2 = new Player(prompt("Player 2, enter your name."), 0);
var Players = [Player1, Player2];


$(document).ready(function() {
  $("#player-name0").text(Player1.userName);
  $("#player-name1").text(Player2.userName);

  $("#player-roll-butt" + turnIndex).click(function() {

    var rollResult = Players[turnIndex].roll();
    $("#player-roll-result" + turnIndex).text(rollResult);

    $("#player-turn-total" + turnIndex).text(turnScore);
  });

  $("#player-hold-butt" + turnIndex).click(function() {

    Players[turnIndex].hold();
    $("#player-total" + turnIndex).text(Players[turnIndex].score);
    $("#player-turn-total" + turnIndex).text("0");
    $("#player-roll-result" + turnIndex).text("0");


    nextTurn();
  });

});
