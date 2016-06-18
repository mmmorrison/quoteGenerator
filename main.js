$(document).ready(function(){
  var classCycle=['imageCycle1','imageCycle2', 'imageCycle3', 'imageCycle4', 'imageCycle5', 'imageCycle6', 'imageCycle7', 'imageCycle8', 'imageCycle9', 'imageCycle10'];
  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  // var id = Math.floor(Math.random() * 13);


  $('body').addClass(classToAdd);

  $('.new').on('click', function() {
    getQuote();
  });
});

function getQuote(){
  var id = Math.floor(Math.random() * 13);
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
    $('.fa-twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote + '" ' + author));
    $('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(author)+'&content=' + encodeURIComponent(quote));

  });
}
