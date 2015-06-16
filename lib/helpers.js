var Helpers = function() {};

Helpers.getElement = function(elementId) {
  return document.getElementById(elementId);
};

Helpers.help = function() {
  console.log("%c ## Available objects ## ", "color: brown; font-size: medium");
  console.log(" >>> game: an instance of Game");
  console.log(" >>> Sound: an object to play sound effects (check out Sound.list() for a full list of sounds");
  console.log("%c ## Method aliases ## ", "color: brown; font-size: medium");
  console.table([
    {alias: "h()", description: "Shows this help"},
    {alias: "ro()", description: "game.round (current round)"},
    {alias: "ra(answer)", description: "game.revealAnswer (pass an answer number like 1, 2, 3, ...)"},
    {alias: "rw(winner)", description: "game.roundWinner (pass 1 or 2, add points to team)"},
    {alias: "nr()", description: "game.nextRound (loads the next question and answers, clears the strikes)"},
    {alias: "st()", description: "game.strike (adds a strike)"},
    {alias: "la()", description: "game.logAnswers (answers for current round)"},
    {alias: "S", description: "Alias for Sound, ie: S.strike()"}
  ]);
  console.log("%c ## Game flow ## ", "color: brown; font-size: medium");
  console.log("1. game.logAnswers(), check the answers for the current question");
  console.log("2. game.revealAnswer(number), check the number here ^^^^");
  console.log("3. game.strike(), if the given answer is not in the list");
  console.log("4. Sound.strike() for a fail steal (if applies)");
  console.log("5. game.roundWinner(1 or 2)");
  console.log("6. game.nextRound()");

};

var _ = Helpers.getElement;
var h = Helpers.help;

function muteSoundEffects() {
  [].forEach.call(document.getElementsByTagName("audio"), function(audio) {
    audio.muted = true;
  });
}

function unmuteSoundEffects() {
  [].forEach.call(document.getElementsByTagName("audio"), function(audio) {
    audio.muted = false;
  });
}
