var hasUserAccepted = false;
document.querySelector('ch-button').addEventListener('click', function (e) {
  var email = $("input[name=address1]").val();
  if (email.indexOf("@") >= 0)
  {
    e.stopImmediatePropagation();
    $("input[name=address1]").parent().addClass("ch-invalid");
    $(".text-danger span").text("Address is not valid.");
    console.log(hasUserAccepted);
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#shipping_address1").offset().top
    }
                                                         , 500);
  }
  else {
    //Invalid. Not an email address 
    hasUserAccepted = true;
    $("input[name=address1]").parent().removeClass("ch-invalid");
    $(".text-danger span").text("");
    console.log(hasUserAccepted);
  }
}
                                                     , true);
