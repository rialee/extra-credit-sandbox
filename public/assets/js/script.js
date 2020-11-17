$(document).ready(function () {

  //initializing tooltip
  $('[data-toggle="tooltip"]').tooltip();

});

$("#fun-fact-btn").on("click", function (e) {

  console.log("clicked!")
  // ajax api get request
  $.ajax("/api/facts", {
    type: "GET",
  }).then(
    function (data) {

      // set up appending data
      const factContent = `<p><mark><strong>Fact: ${data[0].id } : </strong></mark> ${data[0].fact}</p>`

       // console.log(data)
      console.log(factContent)

      // append the content onto modal
      $(factContent).appendTo("body").modal();

      location.reload;
    }
  );
})


