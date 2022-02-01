$( document ).ready(function() {
  setTimeout(function(){ 
    $('#shipping_country option[value="Canada"]').prop("selected", "selected"); 
  }, 1500);
});