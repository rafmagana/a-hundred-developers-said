var Sound = function() {};
var S = Sound;

Sound.list = function(){
  return ['strike', 'answerFound', 'suspense', 'lost'];
};

Sound.strike = function() {
  _("strike-sound").play();
};

Sound.answerFound = function() {
  _("show-answer-sound").play();
};

Sound.specificAnswer = function() {
  _("more-specific-answer-sound").play();
};

Sound.suspense = function() {
  _("suspense-sound").play();
};

Sound.lost = function() {
  _("lost-round-sound").play();
};
