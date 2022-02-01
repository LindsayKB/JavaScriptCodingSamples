//Before adding this code, please upload the PayPal logo
$(document).ready(function() {
   setTimeout(function(){
     //Get payment button and put in div
     var paypalPaymentButton = $("#paypal-button-braintree").parent().html();
     
     //Add content to <li>
     $("#paypal-button-braintree").parent().html('<div class="checkbox-row d-flex justify-content-start align-items-center paypal-option"><label for="paypal-t" class="d-none"></label> <input type="radio" id="paypal-t" value="paypal_commerce"> <div class="ch-custom-radio"></div> <div class="ch-custom-label"><img src="https://thewashwarrior.com/a/secure/assets/images/payment-methods/paypal.png" alt="PAY_PAL" class="img-responsive"></div></div>');
  }, 100);
  
  //Append new <li> with PayPal content
  $("payment-component ul").append('<li class="extended-li p-0 paypalPayment">' + paypalPaymentButton + '</li>');
  $(".paypalPayment").hide();
});

$( ".paypal-option .ch-custom-radio" ).click(function() {
  $(".paypalPayment").toggle(100);
});