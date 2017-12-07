var questionObject = {
  Question1: ['img/TwelveSpottedSkimmer.jpg', 'Twelve-spotted Skimmer', 'Common Whitetail', 'Widow Skimmer', 'Prince Baskettail', 'Twelve-spotted Skimmer'],
  Question2: ['img/BlueCorporal.jpg', 'White Corporal', 'Common Whitetail', 'Blue Corporal', 'Common Baskettail', 'Blue Coporal'],
  Question3: ['img/WhiteCorporal.jpg', 'Common Whitetail', 'Great Blue Skimmer', 'Widow Skimmer', 'White Corporal', 'White Corporal']
}

var numberCorrect = 0;
var currentQuestionNumber = 1;

/*
var junk = questionObject.Question1[1];
console.log(junk);

Object.keys(questionObject).forEach(function(key){
  console.log(
    'The correct answer to`' + key + '` is ' + questionObject[key][5] +
    '.'
  );
})
*/

function renderHeroPage (){
  $('.js-hero').removeClass('hideMe');
  $('.js-quiz-page').addClass('hideMe');
  $('.js-last-page').addClass('hideMe');
  $('.js-hero-button').click(function(){
    renderQuizPage();
  })
};

function renderLastPage (){
  $('.js-last-page').removeClass('hideMe');
  $('.js-quiz-page').addClass('hideMe');
  $('.js-hero').addClass('hideMe');
  var totalQuestions = currentQuestionNumber -1;
  $('.js-total-score').text(numberCorrect + '/' + totalQuestions);
  numberCorrect = 0;
  currentQuestionNumber = 1;
  $('.js-last-page-button').click(function(){
    renderHeroPage();
  })
};

function renderQuizPage (){
  $('.js-quiz-page').removeClass('hideMe');
  $('.js-hero').addClass('hideMe');
  $('.js-last-page').addClass('hideMe');
  $('.js-quiz-image').attr('src', questionObject.Question1[0]);
  var questionHTML = "";
  for (i=1; i<=4; i++) {
    questionHTML = questionHTML +
      '<input type="radio" name="dragon" value="' + questionObject.Question1[i] + '"> ' +
      questionObject.Question1[i] + '<br>'
  };
  $('.js-answers').html(questionHTML);

  $('#left-footer').text('Question ' + currentQuestionNumber + '/10');
  $('#right-footer').text(numberCorrect + '/' + currentQuestionNumber + ' Correct');

  $('input[type=radio][name=dragon]').change(function() {
    if (this.value === questionObject.Question1[5]) {
      $('.js-correct').removeClass('hideMe');
      $('.js-wrong').addClass('hideMe');
      numberCorrect = numberCorrect + 1;
    } else {
      $('.js-correct-answer').text(questionObject.Question1[5]);
      $('.js-wrong').removeClass('hideMe');
      $('.js-correct').addClass('hideMe');
    }
    $('input[type=radio][name=dragon]').unbind();
  });


  $('.js-quiz-button').click(function(){
    $('.js-wrong').addClass('hideMe');
    $('.js-correct').addClass('hideMe');
    currentQuestionNumber = currentQuestionNumber + 1;
    renderLastPage();
  })
};

$( document ).ready(function() {
  renderHeroPage();
});

