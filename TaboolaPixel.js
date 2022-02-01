var snapData = window.chData;
console.log(window.chData);
var customerEmail = snapData.order.customer.email;
var currency = snapData.order.currency;
var price = snapData.order.total_price;
var transactionID = snapData.order.order_id;
var lastChargedLineItems = snapData.order.last_charged_line_items;
var transactionProducts = [];
var subtotalPrice = 0;
for (var i = 0; i < lastChargedLineItems.length; i++) {
    var item = lastChargedLineItems[i];
    transactionProducts.push( item.id);
    subtotalPrice += (item.price * item.quantity);
}

 window._tfa.push({
   notify: 'event', 
   name: 'make_purchase', 
   revenue: subtotalPrice, //New
   id: 1354829, 
   currency: currency, 
   orderid: transactionID 
 }); 