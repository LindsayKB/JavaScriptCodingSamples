function getShippingDescription() {
  var shippingRates = window.CHDataObject.shipping_rates;
  var currentName;
  var shippingDescription;
  $( "shipping-component ul.bordered-ul li:not(.extended-li) label .ch-custom-label span" ).each(function() {
    for (let i = 0; i < shippingRates.length; i++) {
      currentName = $( this ).text();
      if (currentName == shippingRates[i]["name"]) {
           shippingDescription = "<span class='shipping-rate-description' style='display:block; color: #737373; font-size: 0.8571428571em;'>" + shippingRates[i]["description"] + "</span>";
           //$(this).append(shippingDescription);
           if (shippingDescription.indexOf("[object Object]") > -1) {
             //Do not include
           }
           else {
             $(this).append(shippingDescription);
           } 
          }
      }
  });
}

var checkExist = setInterval(function() {
   if ($("shipping-component ul.bordered-ul li:not(.extended-li) label .ch-custom-label span").text().indexOf('Free Shipping') > -1 || $("shipping-component ul.bordered-ul li:not(.extended-li) label .ch-custom-label span").text().indexOf('Standard Shipping') > -1) {
      console.log("Exists!");
      getShippingDescription();
      clearInterval(checkExist);
   }
  else {
    console.log("Not yet.");
    
  }
}, 100);