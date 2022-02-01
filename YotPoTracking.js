//Get order data

let yotpoData = window.chData;
var orderId = yotpoData.order.order_id;
var orderNumber = yotpoData.order.order_number;
var orderName = yotpoData.order.customer.first_name + " " + yotpoData.order.customer.last_name;
var orderAmount = yotpoData.order.subtotal_price;
var orderCurrency = yotpoData.order.currency;

console.log("Order ID: " + orderId);
console.log("Order Number: " + orderNumber);
console.log("Order Name: " + orderName);
console.log("Order Amount: " + orderAmount);
console.log("Order Currency: " + orderCurrency);

(function e(){
  var e=document.createElement("script");
  e.type="text/javascript",e.async=true,e.src="// staticw2.yotpo.com/##APP_KEY##/widget.js";
  var t=document.getElementsByTagName("script")[0];
  t.parentNode.insertBefore(e,t)})();
  
yotpoTrackConversionData = {source:"pixel_v2", platform:"shopify", orderId: orderId, orderNumber: orderNumber, orderName: orderName, orderAmount: orderAmount, orderCurrency: orderCurrency}

var imageTag = document.createElement("img");
imageTag.src = "// api.yotpo.com/conversion_tracking.gif?app_key=##APP_KEY##&source=pixel_v2&platform=shopify&noscript=1&order_id=" + orderId + "&order_number=" + orderNumber + "&order_name=" + orderName + "&order_amount=" + orderAmount + "&order_currency=" + orderCurrency;
imageTag.width = "1";
imageTag.height = "1";

console.log("Image: " + imageTag);

document.querySelector("body").appendChild(imageTag);