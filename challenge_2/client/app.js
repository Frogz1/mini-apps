$(document).ready(function() {

  var requestBody = '';
  var jsonInput = document.getElementById("json-input");
    var trackInput = () => {
      requestBody = jsonInput.value;  
      console.log(requestBody)
    }
  jsonInput.addEventListener('keydown', trackInput);
  $("#submit").on("click", function(e) {
    e.preventDefault();
      $.ajax({
        "async":true,
        "crossDomain": true,
        type: "POST",
        url: "http://localhost:3001/generate",
        data:$("#json-input").val(),
        headers:{
          "Content-Type":"application/json"
        },
        // dataType: "application/json",
        success: function (response) {
          console.log(response);
          $("#result").append("<p>" + response + "</p>");
          $("#json-input").val('');      
        }
      });
    })
  
  
})


    // Now use it!
