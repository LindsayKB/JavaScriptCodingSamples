(function(win) {
  'use strict';
  var listeners = [],
      doc = win.document,
      MutationObserver = win.MutationObserver || win.WebKitMutationObserver,
      observer;
  function ready(selector, fn) {
    // Store the selector and callback to be monitored
    listeners.push({
      selector: selector,
      fn: fn
    }
                  );
    if (!observer) {
      // Watch for changes in the document
      observer = new MutationObserver(check);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true
      }
                      );
    }
    // Check if the element is currently in the DOM
    check();
  }
  function check() {
    // Check the DOM for elements matching a stored selector
    for (var i = 0, len = listeners.length, listener, elements; i < len; i++) {
      listener = listeners[i];
      // Query for elements matching the specified selector
      elements = doc.querySelectorAll(listener.selector);
      for (var j = 0, jLen = elements.length, element; j < jLen; j++) {
        element = elements[j];
        // Make sure the callback isn't invoked with the
        // same element more than once
        if (!element.ready) {
          element.ready = true;
          // Invoke the callback with the element
          listener.fn.call(element, element);
        }
      }
    }
  }
  // Expose `ready`
  win.ready = ready;
}
)(this);
// International Shipping Notice
ready('#shipping_country', function(element) {
  var internationalShippingNoticeText = 'PLEASE NOTE: If this country charges any customs fees, duties, taxes, or tariffs, you are responsible for those fees upon delivery. Unfortunately, we are unable to collect any fees on your behalf.';
  //var internationalShippingMethodText = 'Your order is carefully packed and shipped from our office in sunny Scottsdale, AZ. International orders typically arrive within 1 - 4 weeks, depending on the country and customs. We\'ll send you a tracking number as soon as it ships so you can easily track your order\'s progress.';
  //console.log(internationalShippingNoticeText);
  //console.log(internationalShippingMethodText);
  // Add empty notice box after country selector in shipping
  $('#shipping_phone').after(
    '<div id="internationalShippingNotice" class="" style="margin:9px; color: orange;"></div>'
  );
  // Add empty method box after shipping selection
  //$('#checkout-shipping-options').after(
  //  '<div id="internationalShippingMethod" style="margin:9px; color: #989898;"></div>'
  //);
  // If country is not US on page load, add shipping notice content
  if($('#shipping_country option:selected').val() != 'United States') {
    //$('#internationalShippingNotice').text(internationalShippingNoticeText);
    // Add method box content after shipping selection
    //$('#internationalShippingMethod').text(internationalShippingMethodText);
  }
  // Watch any changes to the country selection in shipping options
  $(document).on('change', 'select', function() {
    //console.log($(this).val()); // the selected options’s value
    $('#internationalShippingNotice').text('');
    // empty notice if US is reselected
    //$('#internationalShippingMethod').text(''); // empty notice if US is reselected
    // If shipping country is not the US
    if($('#shipping_country option:selected').val() != 'United States') {
      //console.log('non US country');
      $('#internationalShippingNotice').text(internationalShippingNoticeText);
      //$('#internationalShippingMethod').text(internationalShippingMethodText);
    }
  }
                );
}
     );
