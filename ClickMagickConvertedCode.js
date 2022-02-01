var clickmagick_cmc = {
      vid: '',
}

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://cdn.clkmc.com/cmc.js';    
document.getElementsByTagName('head')[0].appendChild(script);

(function() {
var img = new Image();
img.width = 1;
img.height = 1;
img.src = ' https://www.clkmc.com/api/s/pixel/?uid=151515&vid=' + clickmagick_cmc.vid + '&amt=' + window.chData.order.subtotal_price + '&ref='; 
document.body.appendChild(img);
})();