//var array = [ "Summer", "Sunshine", "Clouds", "Fresh Grass", "Palm Trees", "Beaches", "Flowers", "Fruit"];
// Don't need teh array variable here??

$(function() {
$( "button" ).click(function() {
  var url = $(this).attr("id");
 // $(this).css("color", "blue");
   $.get(url, function(response) {
    var resText;

    if(typeof response === "object"){
      resText = response.setup + ": " + response.punchline;

    }else {
      resText = response;
    }
 $("#ajax-text").text(resText);
//   var newWord = array[Math.floor(Math.random() * array.length)];
});
});
});

