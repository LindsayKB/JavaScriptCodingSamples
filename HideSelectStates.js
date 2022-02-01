function removeSomeProvinces () {
  $( "#shipping_province option" ).each(function() {
        if (($( this ).attr("value") == "Armed Forces Americas") || ($( this ).attr("value") == "Armed Forces Europe") || ($( this ).attr("value") == "Armed Forces Pacific"))
        {
          $(this).remove();
        }
        });
}
var checkExist = setInterval(function() {
   if ($('#shipping_province option').length > 0) {
      console.log("Exists!");
      removeSomeProvinces();
      clearInterval(checkExist);
   }
  else {
    console.log("Not yet.");
    
  }
}, 1000);