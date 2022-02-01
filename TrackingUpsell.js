function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

if(window.chData.position == 1){
window.addEventListener("load", function () {
    var offer_id = getCookie('tuneofferid');
    var order_id = window.chData.order.carthook_order_id;
    var pixel = document.createElement("IMG");
    var lastChargedLineItems = window.chData.order.last_charged_line_items;
    var subtotalPrice = 0;
    for (var i = 0; i < lastChargedLineItems.length; i++) {
         var item = lastChargedLineItems[i];
         subtotalPrice += (item.price * item.quantity);
    }
    var amount = subtotalPrice;
    pixel.setAttribute("src", " https://advertisehealth.go2cloud.org/aff_l?offer_id="+offer_id+"&amount="+amount+"&adv_sub=");
    pixel.setAttribute("height", "1");
    pixel.setAttribute("width", "1");
    document.body.appendChild(pixel);
});
}