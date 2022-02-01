document.querySelector('span.ch-custom-label').innerText = `Keep me up to date on news and exclusive offers by email`;
//document.querySelector('.label-buyer-accepts-text-marketing span.ch-custom-label').innerText = `Get 25% Off Next Order of Pumpkin Products`;
//document.querySelector('.promo-text').innerText = `Sign up to our VIP list and we'll text you a coupon code off your next order`;
setTimeout(function() {
  $(document).ready(function() {
    //$('customer-fieldset .row').append('<div id=\"sms-optin-row\" class=\"col-12\"><\/div>');
    setTimeout(function(){
      $('.smsbump-checkbox-wrapper').detach().appendTo('#sms-optin-row');
      setTimeout(function(){
        $('#in1o6x').detach().appendTo('.smsbump-checkbox-wrapper');
        $('.label-buyer-accepts-text-marketing span.ch-custom-label').text('YES! I would love to receive free samples of upcoming products!');
        $('.promo-text').text(`Tick This Box To Get Free Samples Of Our New Products`);
        $("label[for='shipping_zip']").text("Zip Code");
        $(".shipping-component .ch-custom-label .pl-3 span").text("Please enter address above to see shipping options.");
      }
                 ,1000);
    }
               , 1000);
  }
                   );
}
           , 1000);
