let data = window.chData;
var totalPrice = data.order.total_price;
var transactionID = data.order.order_number;
var offerId = "4";
var iframe = document.createElement('iframe');
iframe.style.display = "none";
iframe.src = "http://liveanabolic.go2cloud.org/aff_lsr?offer_id=" + offerId + "&amount=" + totalPrice + "&transaction_id=" + transactionID;
document.body.appendChild(iframe);