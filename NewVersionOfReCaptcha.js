let script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
document.getElementsByTagName('head')[0].appendChild(script);
var recaptchaSelected = false;
var correctResponse;
var onloadCallback = function() {
  grecaptcha.render('html_element', {
    'sitekey' : 'SITEKEY',
    'callback' : correctCaptcha
  }
                   );
};
var correctCaptcha = function(response) {
  correctResponse = response;
  console.log(correctResponse);
};
document.querySelector('ch-button').addEventListener('click', function (e) {
  if (correctResponse == ""){
    console.log("You can't proceed!");
    alert("Please click 'I am not a robot' checkbox.");
    e.stopImmediatePropagation();
    $(".captcha-container").parent(".row").css("flex-direction","column");
    $(".captcha-container").before("<p class='recaptcha-error' style='color:red'>Please review the reCAPTCHA box</p><br>");
    $([document.documentElement, document.body]).animate({
      scrollTop: $(".g-recaptcha").offset().top
    }
                                                         , 500);
  }
  else {
    //var resultIs = grecaptcha.getResponse();
    console.log( "Correct Response" + correctResponse );
    console.log("Thank you");
    if ($(".recaptcha-error")) {
      $(".recaptcha-error").remove();
    }
    recaptchaSelected = true;
  }
}
                                                     , true);