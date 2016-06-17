$(document).ready(function(){
  var classCycle=['imageCycle1','imageCycle2', 'imageCycle3', 'imageCycle4', 'imageCycle5', 'imageCycle6', 'imageCycle7', 'imageCycle8', 'imageCycle9', 'imageCycle10'];
  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  var id = Math.floor(Math.random() * 13);
  var rando = "https://quotes-generator.herokuapp.com/random/" + id;

  $('body').addClass(classToAdd);

  $('.new').on('click', function() {
    $.getJSON(rando, function(result) {
      console.log(result.quote);
      $(".quote").html(result.quote);
      $('.author').html(result.author);
      $('.title').html(result.book)
    })
  });

  function getQuote(){
    $.ajax({
      url: rando,
      success: function(response) {
        console.log(response);
        var r = JSON.parse(response);
        currentQuote = r.quote;
        currentAuthor = r.author;
        if(inIframe())
      }
    });
  }

});
