/*Insert custom class on zip code field*/
$(window).bind("load", function() {
  $(".input-shipping-zip").parent().addClass('zip-code-parent');
  var checkForErrorVal = setInterval(checkForError, 10);
  function checkForError() {
    console.log("Current text: " + $(".zip-code-parent .text-danger").text().trim());
    console.log("Current danger text: " + $(".text-danger span").text().trim());
    if ($(".zip-code-parent .text-danger").text().trim().length > 0) {
      console.log("Stop Loop!");
      stopLoop();
      var currentErrorContent = $('.text-danger span').text().trim();
      console.log(currentErrorContent);
      //MOST COMMON ERRORS
      if (currentErrorContent == "Zip is not valid for United Kingdom") {
        console.log("new error message");
      }
      else if (currentErrorContent == "Enter a valid ZIP / postal code for United Kingdom") {
        console.log("new error message2");
      }
      else if (currentErrorContent == "Zip is required") {
        console.log("new error message3");
      else {
        console.log("Current text3: " + $(".zip-code-parent .text-danger span").text().trim());
        console.log("Current danger text4: " + $(".text-danger span").text().trim());
        //If you want to add a general error message, uncomment the line below
        // $('.zip-code-parent .text-danger span').text("Your bank is unwilling to accept the transaction. Please contact your bank for more details. (Code: 2000)");
      }
    }
    else {
      //Keep going
      console.log("Keep going!");
    }
  }
  function stopLoop() {
    clearInterval(checkForErrorVal);
  }
}
              );
