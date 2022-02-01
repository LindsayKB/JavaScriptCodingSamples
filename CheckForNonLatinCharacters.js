var errorTotal = 0;
var currentVal;
document.querySelector('ch-button').addEventListener('click', function (e) {
  // Stop the click
  // Loop through address fields
  $("shipping-address-fieldset input").each(function() {
    console.log("Current Value: " + $(this).val());
    currentVal = $(this).val();
    //Temporarily removes spaces from field
    currentVal = currentVal.replace(/\s/g, '');
    if(currentVal.match(/^[A-Za-z0-9]+$/)) {
      //Success
      //If it was previously an error, remove CSS styling
      $(this).parent().removeClass("ch-invalid");
      $(this).removeClass("invalid");
      $(this).parents('.input-wrap').find('.text-danger').text("");
    }
    else if ((currentVal == null) || (currentVal == "")) {
      //Skip. It's null
    }
    else {
      //Show error messages
      errorTotal++;
      $(this).parent().addClass("ch-invalid");
      $(this).addClass("invalid");
      $(this).parents('.input-wrap').find('.text-danger').text("Only alphanumeric characters are allowed.");
    }
  }
                                           );
  if (errorTotal > 0) {
    e.stopImmediatePropagation();
    //Stop everything
    $('html, body').animate({
      scrollTop: parseInt($("shipping-address-fieldset").offset().top)
    }
                            , 500);
  }
  else {
    //Continue
  }
  errorTotal = 0;
}, true);
