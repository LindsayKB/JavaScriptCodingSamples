//Snap Pixel Code for Thank You page in a funnel with NO UPSELLS
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
    transactionProducts.push(item.id);
    subtotalPrice += (item.price * item.quantity);
}
console.log("Customer Email: " + customerEmail);
console.log("Currency: " + currency);
console.log("Price: " + price);
console.log("Transaction ID: " + transactionID);
console.log("Subtotal Price: " + subtotalPrice);
console.log("Transaction Products: " + transactionProducts);
(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function() {
  a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)}; 
  a.queue=[];var s='script';
  r=t.createElement(s);
  r.async=!0; r.src=n;var u=t.getElementsByTagName(s)[0]; 
  u.parentNode.insertBefore(r,u);})(window,document, 'https://sc-static.net/scevent.min.js'); 
  snaptr('init', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 
  { 'user_email': customerEmail }); 
  snaptr('track', 'PURCHASE', {
    'currency': currency, 
    'price': price,
    'item_ids': transactionProducts,
    'transaction_id': transactionID});
  
//End Snap Pixel Code