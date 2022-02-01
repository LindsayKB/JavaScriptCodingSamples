let data = window.chData;
var totalPrice = data.order.total_price;
var orderID = data.order.order_id;
var firstProduct = data.order.line_items[0].id;
var img = document.createElement('img'); 
img.src = 'https://URL_TO_PostAffiliatePro/scripts/sale.php?TotalCost=' + totalPrice + '&OrderID=' + orderID + '&ProductID=' + firstProduct; 
img.width = "1";
img.height = "1";
img.border = "0"
document.querySelector('body').appendChild(img); 
console.log(img);