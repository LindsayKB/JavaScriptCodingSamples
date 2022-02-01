/* Notes for maintenance */
/* If Shopify's default shipping method changes for your store, change "Economy" to the name of your new default shipping method */
/* If the shipping method you want to feature changes, you need to update "Standard Shipping" to something else */

$( document ).ready(function() {
  var checkForShipVal = setInterval(checkForShip, 50);
  function checkForShip() {
    if ($('shipping-component ul.bordered-ul li:not(.extended-li):nth-of-type(1) .checkbox-row .ch-custom-label').text().indexOf("Economy") > -1) {
      stopLoop();
      $( "shipping-component ul.bordered-ul li:not(.extended-li)" ).each(function() {
     console.log($(this).text());
     if ($(this).text().indexOf("Standard Shipping") > -1) {
       //Do nothing
       $(this).click();
      console.log("Click!");
     }
     else {
       $(this).remove();
     }
});
    }
    else {
      //Keep going
    }
  }
  function stopLoop() {
    clearInterval(checkForShipVal);
  }
}
                   );