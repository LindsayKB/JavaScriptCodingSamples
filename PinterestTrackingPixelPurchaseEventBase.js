let data = window.chData;
let customerEmail = data.order.customer.email;
let currency = data.order.currency;
let transactionTotal = data.order.total_price;
let carthookTransactionId = data.order.carthook_order_id;
let shopifyTransactionId = data.order.order_id;
 
 pintrk('track', 'checkout', {
    value: transactionTotal,
    currency: currency,
    order_id: shopifyTransactionId
  });