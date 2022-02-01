let data = window.chData;
var orderId = data.order.order_id;
var orderCurrency = data.order.currency;
var customerEmail = data.order.customer.email;
var coupon = data.order.coupon.coupon_code;
var couponAmount = data.order.coupon.amount;

var cartItems = [];
var taxPrice = 0;
var subtotalPrice = 0;

for (var i = 0; i < lastChargedLineItems.length; i++) {
    var previousCartItems = lastChargedLineItems[i];
    cartItems.push({
      subTotal: previousCartItems.price,
      sku: previousCartItems.sku,
      quantity: previousCartItems.quantity,
      name: previousCartItems.title
    });
}

ire('trackConversion', CONVERSIONID, {
    orderId: orderId,
    customerEmail: customerEmail,
    currencyCode: orderCurrency,
    orderPromoCode: coupon,
    orderDiscount: couponAmount,
    items: cartItems
   },
{
verifySiteDefinitionMatch:true
}
);