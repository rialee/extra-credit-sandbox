
$(document).ready(function () {

  //initializing tooltip
  $('[data-toggle="tooltip"]').tooltip();

});

$("#fun-fact-btn").on("click", function(e){console.log("clicked!")})


$('#manual-ajax').click(function(event) {
  event.preventDefault();
  this.blur(); // Manually remove focus from clicked link.
  $.get(this.href, function(html) {
    $(html).appendTo('body').modal();
  });
});