(function(e, t, n) {
    if (e.snaptr) return;
    var a = e.snaptr = function() {
      a.handleRequest ? a.handleRequest.apply(a, arguments) : a.queue.push(arguments)
    };
    a.queue = [];
    var s = 'script';
    r = t.createElement(s);
    r.async = !0;
    r.src = n;
    var u = t.getElementsByTagName(s)[0];
    u.parentNode.insertBefore(r, u);
  })(window, document, 'https://sc-static.net/scevent.min.js');
 
  snaptr('init', 'a2c81ee4-355e-43a9-8c8b-cc592d51da24', {
    'user_email': window.chData.order.customer.email
  });
  snaptr('track', 'PURCHASE', {
    'price': window.chData.order.total_price,
    'currency': window.chData.order.currency,
    'transaction_id': window.chData.order.carthook_order_id,
    'item_ids': window.chData.order.line_items.map(function(t) {
      return t.variant_id ? String(t.variant_id) : null
    }).filter(Boolean)
  });
