var validAddressCheck = false;
document.querySelector('ch-button').addEventListener('click', function (e) {
  var address1 = $("input[name=address1]").val();
  if( (isEmail(address1)) || (isPhone(address1)) || (address1 == "false") || (isAllNumbers(address1)))
  {
    //Invalid
    e.stopImmediatePropagation();
    console.log("Email: " + isEmail(address1));
    console.log("Phone: " + isPhone(address1));
    $("input[name=address1]").parent().addClass("ch-invalid");
    $(".text-danger span").text("Address is not valid.");
    console.log(validAddressCheck);
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#shipping_address1").offset().top
    }, 500);
  }
  else {
    //Valid
    validAddressCheck = true;
    $("input[name=address1]").parent().removeClass("ch-invalid");
    $(".text-danger span").text("");
    console.log(validAddressCheck);
  }
}, true);
                                                     
function isEmail(address1) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(address1);
}
 
function isPhone (address1){
  var intRegex = /([0-9]{10})|(\([0-9]{3}\)\s+[0-9]{3}\-[0-9]{4})/;
  return intRegex.test(address1);
}
function isAllNumbers (address1) {
  var isnum = /^\d+$/.test(address1);
  return isnum;
}