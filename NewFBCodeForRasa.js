//Please include this script at the top of your custom FB pixel script
!function(f,b,e,v,n,t,s)
{
  if(f.fbq)return;
  n=f.fbq=function(){
    n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;
  n.push=n;
  n.loaded=!0;
  n.version='2.0';
  n.queue=[];
  t=b.createElement(e);
  t.async=!0;
  t.src=v;
  s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}
(window, document,'script',
 'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1505226429509086');
fbq('track', 'PageView');

var order = window.chData.order;
var lineItems = order.line_items;
var lastChargedLineItems = order.last_charged_line_items;
var contents = [];
var content_ids = [];
var item_cnt = 0;
lineItems.forEach(function(el) {
    content_ids.push(el.id.toString());
    contents.push({
        "id": el.id,
        "quantity": el.quantity,
        "price": el.price,
        "title": el.title
    });
    item_cnt += parseInt(el.quantity);
});
/*
//If you want to track the most recent purchase in the flow, use the function below 
lastChargedLineItems.forEach(function(el) {
    content_ids.push(el.id.toString());
    contents.push({
        "id": el.id,
        "quantity": el.quantity,
        "price": el.price,
        "title": el.title
    });
    item_cnt += parseInt(el.quantity);
}); */

if (content_ids.length > 0) {
   fbq('track', 'Purchase', {
        "content_name": "CartHook Purchase",
        "content_ids": content_ids,
        "content_type": "product",
        "contents": contents,
        "value": order.total_price,
        "num_items": item_cnt,
        "currency": "USD"
    });
}

if (content_ids.length > 0) {
   fbq('track','Subscribe',{
        "content_name": "CartHook Purchase (Auto-renew - Subscribed)",
        "content_ids": content_ids,
        "content_type": "product",
        "contents": contents,
        "value": order.total_price,
        "num_items": item_cnt,
        "currency": "USD"
    });
}