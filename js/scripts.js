var turnScore = 0;

$(document).ready(function() {
  $("#player-one-roll-butt").click(function() {
    var rollResult = Math.floor(Math.random() * 6) + 1;
    $("#player-one-roll-result").text(rollResult);

    if (rollResult === 1) {
      alert("Rolled a 1!");
    } else {
      turnScore += rollResult;
    }
    console.log(turnScore);
  });
});
