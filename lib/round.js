// A round is made of a question and a set of answers
var Round = function(question, roundNumber) {
  this.question = question.question;
  this.answers = question.answers;
  this.roundNumber = roundNumber;

  this.loadData();
};

Round.prototype.loadData = function(){
  this.clear();
  this.loadQuestion();
  this.loadAnswers();
};

Round.prototype.clear = function() {
  var answers = document.getElementById("answers");
  answers.innerHTML = "";
};

Round.prototype.loadQuestion = function(){
  var question = document.getElementById("question");
  question.innerHTML = this.question;
};

Round.prototype.loadAnswers = function(){
  var self = this;
  this.answers.forEach(function(answer, index){
    self.appendAnswer(answer, index + 1);
  });
};

Round.prototype.appendAnswer = function(answer, answerId) {
  var t = document.querySelector("#answer-template");
  wrapper = t.content.querySelector('div');
  text = wrapper.querySelector('.text');
  points = wrapper.querySelector('.points');

  text.innerHTML = answer.answer;
  points.innerHTML = answer.value;

  wrapper.id = "answer-" + answerId;

  var answer = document.importNode(t.content, true);
  var answers = document.getElementById("answers");
  answers.appendChild(answer);
};
