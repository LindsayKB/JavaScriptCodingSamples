var interval = setInterval(function() {
  var address1 = document.getElementById('shipping_address1');
  if (address1) {
    clearInterval(interval);
    document.querySelectorAll('input').forEach(function(input) {
      if (input.name !== 'address1') {
        input.addEventListener('focus', (event) => address1.setAttribute('autocomplete', 'address-line1'));
      }
    }
                                              );
    address1.addEventListener('focus', (event) => address1.setAttribute('autocomplete', 'chrome-off'));
    address1.addEventListener('blur', (event) => address1.setAttribute('autocomplete', 'address-line1'));
  }
}
                           , 250);
