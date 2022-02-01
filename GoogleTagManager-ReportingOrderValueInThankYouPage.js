function gtagConfig(){
 var ga = document.createElement('script'); 
 ga.type = 'text/javascript'; 
 ga.async = true;
 ga.src = ' https://www.googletagmanager.com/gtag/js?id=AW-620523168';;
 var s = document.getElementsByTagName('script')[0];
 s.parentNode.insertBefore(ga, s);
}
/*Get variables*/
var totalPrice = document.querySelector(".ch-currency");
var currencyOfOrder = document.querySelector(".ch-currency");
var orderNumber = documen.querySelector("#is8ln");

/*Format variables*/
orderNumber = orderNumber.replace("Order #", "");
totalPrice = totalPrice.replace("$","");

gtagConfig(); 
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'AW-620523168');


 gtag('event', 'conversion', {
 'send_to': 'AW-620523168/FChJCLiH39UBEKDd8acC',
 'value': @totalPrice,
 'currency': currencyOfOrder,
 'transaction_id': @orderNumber
 });