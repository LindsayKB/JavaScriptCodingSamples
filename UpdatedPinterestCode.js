var PTorder = window.chData.order;
var PTlastChargedLineItems = PTorder.last_charged_line_items;
var PTcontent_ids = [];
var PTcontents = [];
var PTitem_cnt = 0;
PTlastChargedLineItems.forEach(function(el) {
    PTcontent_ids.push(el.id.toString());
    PTcontents.push({
    product_id: el.id,
    product_quantity: el.quantity,
    product_price: el.price
    });
    PTitem_cnt += parseInt(el.quantity);
});
 console.log(PTorder.total_price);
 console.log(PTitem_cnt);
 console.log(PTorder.currency);
 console.log(PTcontents);
 console.log(PTorder.carthook_order_id);
 pintrk('track', 'checkout', {
   property: 'carthook_thankyou',
   value: PTorder.total_price,
   order_quantity: PTitem_cnt,
   currency: PTorder.currency,
   line_items: PTcontents,
   order_id: PTorder.carthook_order_id
 });
 
 //Create img element and append to HTML
 var img = document.createElement('img');
 img.height = 1;
 img.width = 1;
 img.src = "https://ct.pinterest.com/v3/?tid=123456789&event=checkout&ed[property]='carthook_thankyou'&ed[order_quantity]=" + PTitem_cnt + "&ed[currency]=" + PTorder.currency + "&ed[line_items]=" + PTcontents + "&ed[order_id]=" + PTorder.carthook_order_id + "&noscript=1";
 img.display = "none";
 document.getElementById('body').appendChild(img);
 console.log(img);