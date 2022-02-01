// This example does not have FB Pixel basic tracking code included. Make sure that is included before calling the fbq method.

// 1. Fire page view on checkout page (add to Global code -> Checkout Page)
fbq('track', 'PageView');

// 3. Please only put this on upsell/downsell/ty pages, as this is not avail on checkout pages. For each upsell/downsell (Global Scripts -> Upsell and Downsell pages), you want to track the purchase event for, you'd iterate through last_charged_line_items
let order = window.chData.order;
let lineItems = order.line_items
let contents = [];
let content_ids = [];
let item_cnt = 0;
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