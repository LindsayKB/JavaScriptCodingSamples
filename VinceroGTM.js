var GTMid = 'GTM-MRRW2L'; // Your GTM id here
var orderId = window.chData.order.carthook_order_id;
var lastChargedLineItems = window.chData.order.last_charged_line_items;

var lineItems = window.chData.order.line_items;
var customerId =  'customer_id';
var customerEmail =  window.chData.order.customer.email;
var orderPromoCode = window.chData.order.coupon.coupon_code;
var orderDiscount = window.chData.order.total_coupons_amount;
var currencyCode = window.chData.order.currency;
var customerStatus = window.chData.order.customer.buyer_accepts_marketing;

var criteoItems = []; //{value will be an array with the order line items}
var impactItems = []; //{value will be an array with the order line items}

for (var i = 0; i < lineItems.length; i++) {
    var item = lineItems[i];
  criteoItems.push({
    'id': item.id,
	  'price': item.discounted_price,
	  'quantity': item.quantity,
    });
	
	impactItems.push({
    'category': item.title,
	  'sku': item.sku,
	  'quantity': item.quantity,
	  'subTotal': item.discounted_price,
    });

}

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
  
    subtotalPrice += (item.discounted_price * item.quantity);
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
      'transactionProducts': transactionProducts,
      'customerId' : customerId,
      'customerEmail' : customerEmail,
      'orderPromoCode' : orderPromoCode,
      'orderDiscount' : orderDiscount,
      'currencyCode' : currencyCode,
      'customerStatus' : customerStatus,
      'criteoItems' : criteoItems,
      'impactItems' : impactItems
  });
}

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer', GTMid);