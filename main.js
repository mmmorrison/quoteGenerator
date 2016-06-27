$(document).ready(function(){
  var classCycle=['imageCycle1','imageCycle2', 'imageCycle3', 'imageCycle4', 'imageCycle5', 'imageCycle6', 'imageCycle7', 'imageCycle8', 'imageCycle9', 'imageCycle10'];
  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];

  getQuote()

  function openURL(url){
  window.open(url, 'Share', 'width=50, height=40, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
};

  $('body').addClass(classToAdd);

  $('.new').on('click', function() {
    getQuote();
  });
});

function getQuote(){
  var id = Math.floor(Math.random() * 14);
  var retrieveData = $.ajax({
    url: "https://quotes-generator.herokuapp.com/random/" + id,
    type: 'GET',
    dataType: 'json',
  });

  retrieveData.done(function(data) {
    var quote = data.quote;
    var author = data.author;
    var title = data.book;

    $('.quote, .author').empty();
    $('.quote').append(quote);
    $('.author').append(author);

    $('.tweet').on('click', function() {
      openURL('https://twitter.com/intent/tweet?hashtags=quotes&related=mmm5225&text=' + encodeURIComponent(quote + author));
    })

    $('.tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=mmm5225&text=' + encodeURIComponent(quote + author));
  });
}
