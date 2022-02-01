 let data = window.chData;
 let customerEmail = data.order.customer.email;
 let currency = data.order.currency;
 let transactionTotal = data.order.total_price;
 let carthookTransactionId = data.order.carthook_order_id;
 let shopifyTransactionId = data.order.order_id;
 
(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function() {
  a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)}; 
  a.queue=[];var s='script';
  r=t.createElement(s);
  r.async=!0; r.src=n;var u=t.getElementsByTagName(s)[0]; 
  u.parentNode.insertBefore(r,u);})(window,document, 'https://sc-static.net/scevent.min.js'); 
  snaptr('init','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', 
  { 'user_email': customerEmail }); 
  snaptr('track', 'PURCHASE', {
    'currency': currency, 
    'price': transactionTotal,
    'transaction_id': carthookTransactionId});