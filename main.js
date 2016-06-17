$(document).ready(function(){
  var classCycle=['imageCycle1','imageCycle2', 'imageCycle3', 'imageCycle4', 'imageCycle5', 'imageCycle6', 'imageCycle7', 'imageCycle8', 'imageCycle9', 'imageCycle10'];
  var randomNumber = Math.floor(Math.random() * classCycle.length);
  var classToAdd = classCycle[randomNumber];
  $('body').addClass(classToAdd);

  $('.new').on('click', function() {
    var id = Math.floor(Math.random() * 7);
    $.getJSON("https://quotes-generator.herokuapp.com/random/:" + id, function(result) {
      console.log(result);
      $('.content').html(JSON.stringify(result));

    })
  });
});
