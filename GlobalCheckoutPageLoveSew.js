CH.event(function(EVENT, data) {
    if (EVENT == 'INITIATED_PAGE') {
        let cartData = data.cart_data;
        let lineItems = cartData.line_items;
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
        window.fbq('track', 'AddToCart', {
            "content_name": "CartHook Checkout",
            "content_ids": content_ids,
            "content_type": "product",
            "contents": contents,
            "value": cartData.total_price,
            "num_items": item_cnt,
            "currency": "USD"
        });
        window.fbq('track', 'InitiateCheckout', {
            "content_name": "CartHook Initiate Checkout",
            "content_ids": content_ids,
            "content_type": "product",
            "contents": contents,
            "value": cartData.total_price,
            "num_items": item_cnt,
            "currency": "USD"
        });
    }
}, function(EVENT, error) {
    console.log(EVENT, error);
});