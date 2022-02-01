function changeShippingText() {
$( ".CE__shipping-component ul.bordered-ul li:not(.extended-li) .checkbox-row .ch-custom-label" ).each(function() {
  var fullLabel = $( this ).text();
  var currentLabel = $( this ).find("span:eq(1)").text();
console.log(currentLabel);
currentLabel = "(Expected Delivery Time: 3-5 Business Days)";
$( this ).find("span:eq(1)").text(currentLabel);
});
  }

var checkExist = setInterval(function() {
   if ($('.CE__shipping-component ul.bordered-ul li:not(.extended-li) .checkbox-row .ch-custom-label').text().indexOf('Priority') > -1) {
      console.log("Exists!");
      changeShippingText();
      clearInterval(checkExist);
   }
  else {
    //Nothing
    
  }
}, 100);
