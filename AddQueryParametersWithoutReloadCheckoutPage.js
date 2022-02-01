$( document ).ready(function() {
  var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?coupon=FREESHIP';
  window.history.pushState({path: newurl }, '', newurl);
});
