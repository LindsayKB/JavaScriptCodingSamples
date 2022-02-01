//var lastChargedLineItems = window.chData.order.last_charged_line_items;
if (lastChargedLineItems.length > 0) {
  $.getScript('https://www.googleadservices.com/pagead/conversion_async.js').then(function () {
    var subTotal = 0;
    for (var i = 0 ; i < lastChargedLineItems.length; i++) {
      subTotal += lastChargedLineItems[i].price * lastChargedLineItems[i].quantity;
    }
    // Place any additional conversion values in this javascript
    // object:
    window.google_trackConversion({
      google_conversion_id: 806767069,
      google_conversion_label: "VbvdCPP_69EBEN2T2YAD",
      google_conversion_format: "3",
      google_conversion_order_id: window.chData.order.carthook_order_id,
      google_conversion_value: subTotal
    }
                                 );
  }
                                                                                 );
}