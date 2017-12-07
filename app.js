var questionObject = {
  Question1: ['img/TwelveSpottedSkimmer.jpg', 'Twelve-spotted Skimmer', 'Common Whitetail', 'Widow Skimmer', 'Prince Baskettail', 'Twelve-spotted Skimmer'],
  Question2: ['img/BlueCorporal.jpg', 'White Corporal', 'Common Whitetail', 'Blue Corporal', 'Common Baskettail', 'Blue Coporal'],
  Question3: ['img/WhiteCorporal.jpg', 'Common Whitetail', 'Great Blue Skimmer', 'Widow Skimmer', 'White Corporal', 'White Corporal']
}

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
  $('.js-quiz-page').removeClass('hideMe');
  $('.js-quiz-page').addClass('hideMe');
  $('.js-last-page').removeClass('hideMe');
  $('.js-last-page').addClass('hideMe');
  $('.js-hero-button').click(function(){
    renderQuizPage();
  })
};

function renderLastPage (){
  $('.js-last-page').removeClass('hideMe');
  $('.js-quiz-page').removeClass('hideMe');
  $('.js-quiz-page').addClass('hideMe');
  $('.js-hero').removeClass('hideMe');
  $('.js-hero').addClass('hideMe');
  $('.js-last-page-button').click(function(){
    renderHeroPage();
  })
};

function renderQuizPage (){
  $('.js-quiz-page').removeClass('hideMe');
  $('.js-hero').removeClass('hideMe');
  $('.js-hero').addClass('hideMe');
  $('.js-last-page').removeClass('hideMe');
  $('.js-last-page').addClass('hideMe');
  $('.js-quiz-button').click(function(){
    renderLastPage();
  })
};

$( document ).ready(function() {
    renderHeroPage();
});

