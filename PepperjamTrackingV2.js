let order = window.chData.order;

var lastChargedLineItems = order.line_items;
var order_items = [];
for (var i = 0; i < lastChargedLineItems.length; i++) {
    var item = lastChargedLineItems[i];
    order_items.push({
      'id': item.sku,
      'price': item.discounted_price,
      'quantity': item.quantity,
    });
    if (item.tax_amount) {
        taxPrice += item.tax_amount;
    }
 
    subtotalPrice += (item.price * item.quantity);
}
var order_id = order.order_id;
var transaction_type = 1;
var new_to_file = 0;
var coupons = order.coupon_code;
function pepperjam_pixel (order_id, order_items, new_to_file, transaction_type) {
    var pixel_html  = '';
    var integration = 'DYNAMIC';
    var program_id  = '9631';

    if (order_id && order_items) {
        jQuery.each( order_items, function (i, order_item) {
           pixel_html += '&' + 'ITEM_ID' + i + '=' + order_item.id +
                         '&' + 'ITEM_PRICE' + i + '=' + order_item.price +
                         '&' + 'QUANTITY' + i + '=' + order_item.quantity;
        });
       
        if (pixel_html) {
            pixel_html = '<iframe src="https://t.pepperjamnetwork.com/track?' +
                         'INT=' + integration +
                         '&' + 'PROGRAM_ID' + '=' + program_id +
                         '&' + 'ORDER_ID' + '=' + order_id;
                         
                    if (coupons === undefined || coupons === null) {
                         // do nothing. Skip to rest of URL
                    }
                    else {
                      pixel_html +=  '&' + 'COUPON' + '=' + coupons;
                    }
                   pixel_html +=  '&' + 'NEW_TO_FILE' + '=' + new_to_file +
                         '&' + 'TYPE' + '=' + transaction_type +
                       '" width="1" height="1" frameborder="0"></iframe>';
               
        }
    }
   
    $('body').append(pixel_html);
    console.log(pixel_html);
}    
pepperjam_pixel(order_id, order_items, new_to_file, transaction_type);

(function(){ var a=document.createElement("script"); a.type="text/javascript", a.async=!0, a.src="//container.pepperjam.com/3153847724.js"; var b=document.getElementsByTagName("head")[0]; if(b) b.appendChild(a,b); else { var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b) } })();
