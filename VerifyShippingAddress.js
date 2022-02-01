//Run function to check if all fields have been filled out each time one is filled in
//If not, keep going. Repeat.
$( "#shipping_address1" ).focusout(function() {
    checkAddressFields();
});
$( "#shipping_city" ).focusout(function() {
    checkAddressFields();
});
$( "#shipping_zip" ).focusout(function() {
    checkAddressFields();
});
function checkAddressFields() {
    //Get values of fields above
    $("#shipping_address1").val();
    if( $("#shipping_address1").val() && ("#shipping_city").val() && ("#shipping_zip").val()) {
      
    }
}