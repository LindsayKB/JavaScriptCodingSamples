// This example does not have FB Pixel basic tracking code included. Make sure that is included before calling the fbq method.
let order = window.chData.order;
let lastChargedLineItems = order.last_charged_line_items;
let contents = [];
let content_ids = [];
let item_cnt = 0;
lastChargedLineItems.forEach(function(el) {
    content_ids.push(el.id.toString());
    contents.push({
        "id": el.id,
        "quantity": el.quantity,
        "price": el.price,
        "title": el.title
    });
    item_cnt += parseInt(el.quantity);
});
if (content_ids.length > 0) {
    window.fbq('trackCustom', 'Subscribe', {
        "content_name": "Subscribe",
        "value": order.total_price,
        "currency": "USD"
    });
}