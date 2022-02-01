var currentTitle;
var count = 0;
 $( "ul.cart-line-items-v2 li .title-container .line-title" ).each(function() {
      currentTitle = $("ul.cart-line-items-v2 li .title-container .line-title").text();
    currentTitle = currentTitle.toLowerCase();
    if (currentTitle.indexOf("auto renew") > -1) { 
       count++; //Instance of subscription product found
       $( "payment-component ul.bordered-ul li" ).each(function() {
          if (($(this).html().indexOf("card-number") > -1) || ($(this).html().indexOf("Credit Card") > -1)) {
            $(this).css("display","none");
          }
        });
      return false;
  }
 });
 
 if (count == 0) {
   //Hide PayPal because no subscriptions were found
    $( "payment-component ul.bordered-ul li" ).each(function() {
          if ($(this).html().indexOf("paypal") > -1) {
            $(this).css("display","none");
          }
        });
 }