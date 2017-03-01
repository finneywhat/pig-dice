$(document).ready(function() {
  $("#player-one-roll-butt").click(function() {
    $("#player-one-roll-result").text(Math.floor(Math.random() * 6) + 1);
  });
});
