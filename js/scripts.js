var turnScore = 0;
var playerOneTotal = 0;


$(document).ready(function() {
  $("#player-one-roll-butt").click(function() {
    var rollResult = Math.floor(Math.random() * 6) + 1;
    $("#player-one-roll-result").text(rollResult);

    if (rollResult === 1) {
      alert("Rolled a 1!");
    } else {
      turnScore += rollResult;
      $("#player-one-turn-total").text(turnScore);
    }

  });

  $("#player-one-hold-butt").click(function() {
    playerOneTotal += turnScore;
    // $("#player-one-total").text()
    console.log(playerOneTotal);
  });

});
