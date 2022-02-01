$( document ).ready(function() {
  setTimeout(function(){
    $( ".cart-line-items-v2 li .line-item-discounts" ).each(function() {
      var code = $( this ).text();
      if (code != "") {
        $( "coupon-component" ).css('display','none');
        console.log("Coupon detected!");
      }
    }
   );
  }, 1000);
} );
