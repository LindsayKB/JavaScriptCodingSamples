    (function () {Grin = window.Grin || (window.Grin = []);var s = document.createElement('script');s.type = 'text/javascript';s.async = true;s.src = ' https://d38xvr37kwwhcm.cloudfront.net/js/grin-sdk.js';
        var x = document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);})();
        var order_id = window.chData.order.order_id; //This could also be window.chData.order.encoded_order_id, depending on your preference
        var amount = window.chData.order.subtotal_price;
        var order_number = window.chData.order.order_number;
        var tracking_domain = ' rasa-koffee.myshopify.com';
        Grin = window.Grin || (window.Grin = []);Grin.push(['conversion', amount, {order_number: order_number, order_id: order_id, tracking_domain: tracking_domain}]);