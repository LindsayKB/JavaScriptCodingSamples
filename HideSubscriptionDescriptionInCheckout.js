$( document ).ready(function() {
    $( ".cart-line-items-v2 li" ).each(function() {
        var productTitle = $(this).find(".line-title").text();
        console.log("Product Title: " + productTitle);
        var position = productTitle.indexOf("Subscription");
          if (position > -1) {
             $(this).find(".line-variant-title").css("display","none");
          }
    });
});

