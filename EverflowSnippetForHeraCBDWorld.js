var customerCoupon;
if (window.chData.order.coupon == null) {
    //No coupon added
   customerCoupon = null;
}
else {
   customerCoupon = window.chData.order.coupon.coupon_code;
}
console.log("Coupon: " + customerCoupon);

var amount = window.chData.order.subtotal_price;
  var adv2 = [];
  for (i=0; i < window.chData.order.line_items.length; i++) {
      adv2.push(window.chData.order.line_items[i].quantity, window.chData.order.line_items[i].sku)
  };
 
  (function() {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = " https://insert_your_domain/scripts/sdk/everflow.js";
    script.onload = function() {
      EF.conversion({
        aid: 39,
        amount: amount,
      order_id: window.chData.order.order_id,
      adv1: window.chData.order.order_number,
      adv2: adv2,
      coupon_code: customerCoupon,
      parameters: {
        'email': window.chData.order.customer ? window.chData.order.customer.email : ''
      }
      });
    };
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  )();