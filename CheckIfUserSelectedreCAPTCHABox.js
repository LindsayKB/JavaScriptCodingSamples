var recaptchaSelected = false;
document.querySelector('ch-button').addEventListener('click', function (e) {
  $("div.g-recaptcha").before("<p class='recaptcha-error' style='color:red'></p>");
  if (!$(".recaptcha-checkbox").hasClass("recaptcha-checkbox-checked"))
  {
    e.stopImmediatePropagation();
    $("div.g-recaptcha").css("border", "1px solid red");
    if ($(".recaptcha-error").indexOf("Please review the reCAPTCHA box") > -1) {
      //Do nothing
    }
    else {
      $(".recaptcha-error").text("Please review the reCAPTCHA box");
    }
    console.log(recaptchaSelected);
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".g-recaptcha").offset().top
    }
                                                         , 500);
  }
  else {
    //Valid
    recaptchaSelected = true;
    $("div.g-recaptcha").css("border", "0px");
    if ($(".recaptcha-error").indexOf("Please review the reCAPTCHA box") > -1) {
      $(".recaptcha-error").text("");
    }
    console.log(recaptchaSelected);
  }
}
                                                     , true);