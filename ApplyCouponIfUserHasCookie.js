//Home page
if (window.location.href == "AFFILIATEURL") {
      window.chCouponCode = getCookie("NAMEOFCOOKIE");
      console.log(window.chCouponCode);
}
 document.cookie = "coupon=NAMEOFCOUPON";

//Cart page
if (window.location.href == "https://statefulprints.com/cart") {
      window.chCouponCode = getCookie("NAMEOFCOOKIE");
      console.log(window.chCouponCode);
}
 
function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}