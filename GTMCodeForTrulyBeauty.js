// Google Tag Manager (Global) 10.16.20 EY
$(document).ready(function(){
   setTimeout(function(){

     var GTMid = 'GTM-5G7XJ28'; // Your GTM id here
var orderData = window.chData.order;
var orderId = orderData.carthook_order_id;
//var lastChargedLineItems = window.chData.order.last_charged_line_items;
console.log("Last Charged Line Items: " + lastChargedLineItems);

window.dataLayer = window.dataLayer || [];

var transactionProducts = [];
var taxPrice = 0;
var subtotalPrice = 0;

for (var i = 0; i < lastChargedLineItems.length; i++) {
    var item = lastChargedLineItems[i];
    transactionProducts.push({
      'sku': item.sku,
      'name': item.title,
      'price': item.price,
      'quantity': item.quantity,
    });
    if (item.tax_amount) {
        taxPrice += item.tax_amount;
    }
  
    subtotalPrice += (item.price * item.quantity);
}

var shippingRates = window.chData.order.last_charged_shipping_rates;
var shippingTotal = 0;

//Sum up shipping
for (var i = 0; i < shippingRates.length; i++) {
    shippingTotal += parseFloat(shippingRates[i].price);
}

if (transactionProducts.length > 0) {
    window.dataLayer.push({
      'event': 'transactionComplete',
      'transactionId': orderId,
      'transactionTotal': parseFloat(subtotalPrice),
      'transactionTax': parseFloat(taxPrice),
      'transactionShipping': parseFloat(shippingTotal),
      'transactionProducts': transactionProducts
  });
  
}

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', GTMid);

   },1500);
});
