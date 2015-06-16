var Game = function() {
  var currentRound = null; // Instance of Round
  var currentRoundNumber = 0;
  var questions = []; // An array of objects with "question" and "answers" properties
  var strikes = 0;
  var score = null;

  var self = this;

  // scores
  this.teamOneScore = 0;
  this.teamTwoScore = 0;
  this.currentQuestionScore = 0;

  var _loadQuestions = function (data) {
    data.forEach(function(element, index) {
      questions.push(element);
    });
  };

  var _setCurrentRound = function(round) {
    currentRound = round;
  };

  this.nextRound = function() { // will load the next question and its answers
    currentRoundNumber += 1;
    var round = new Round(questions[currentRoundNumber - 1], currentRoundNumber);
    _setCurrentRound(round);
    _clearStrikes();
    self.logAnswers();
  };

  this.roundWinner = function(winner) { // winner = 1 or 2
    _addPointsToRoundWinner(winner);
    _resetQuestionScore();
  };

  this.questions = function() { // Prints all the questions in the console
    return questions;
  };

  this.round = function () {
    return currentRound;
  };

  this.answers = function() { // answers for current questions
    return currentRound.answers;
  };

  this.logAnswers = function() {
    console.log("%c ## Answers for round " + self.round().roundNumber + " ## ", "color: brown; font-size: medium");
    console.table(currentRound.answers);
  };

  this.question = function() { // the current question
    return currentRound.question;
  };

  this.strike = function() {
    strikes += 1;
    _getStrike(strikes).querySelector("div").classList.remove("hide");
    Sound.strike();
  };

  // Just in case
  this.removeStrike = function() {
    if(strikes == 0) { return };
    _getStrike(strikes).querySelector("div").classList.add("hide");
    strikes -= 1;
  }

  this.revealAnswer = function(answerId) {
    var answer = _("answer-" + answerId);
    answer.querySelector("div").classList.remove("hide");
    _addAnswerPointsToCurrentQuestionScore(answerId);
    Sound.answerFound();
  };

  var _addPointsToRoundWinner = function(winner) { // winner = 1 or 2
    if(winner > 2) {
      return "Specify a valid winner: 1 or 2";
    }

    var score = parseInt(_getQuestionScore().innerHTML);
    var winnerTeamScore = _("team-" + winner + "-points");

    winnerTeamScore.innerHTML = parseInt(winnerTeamScore.innerHTML) + score;
    console.log(score + " points given to team " + winner);
  };

  var _resetQuestionScore = function() {
    _getQuestionScore().innerHTML = "0";
  };

  var _getQuestionScore = function() {
    return _("current-question-points");
  };

  var _clearStrikes = function() {
    strikes = 0;
    [].forEach.call(document.getElementsByClassName("strike"), function(strike) {
      strike.querySelector('div').classList.add("hide");
    });
  };

  var _getStrike = function(strikeId) {
    return _("strike-" + strikeId);
  };

  var _addAnswerPointsToCurrentQuestionScore = function(answerId) {
    var answer = _("answer" + answerId);
    var score =  _("current-question-points");

    var value = self.answers()[answerId - 1].value;
    score.innerHTML = parseInt(score.innerHTML) + value;
  };

  var _start = function() {
    _loadQuestions(data);
    console.log("%c*********************************", "color: green; font-size: x-large");
    console.log("%c -- 100 developers said -- ", "color: blue; font-size: x-large");
    console.log("%c*********************************", "color: green; font-size: x-large");
    console.log();
    console.log("To control the game check out the info below");
    h()
    console.log();
    self.nextRound(); // here, next round is the first round (^_^)
    console.info("Round 1 has been started");
  };

  _start(); // start the game!
};

window.onload = function() {
  game = new Game();

  ro = game.round;
  ra = game.revealAnswer;
  nr = game.nextRound;
  rw = game.roundWinner;
  st = game.strike;
  la = game.logAnswers;
};
