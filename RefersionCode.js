let script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://www.refersion.com/tracker/v3/pub_0123456789DEMO.js';    
document.getElementsByTagName('head')[0].appendChild(script);

_refersion();

window.onload = () => { 
  lr(function(){ 
    var customerEmail = window.chData.order.customer.email; 
    if (customerEmail.includes("@")) { 
      REFERSION.box.show({ 
        loc : 'https://www.refersion.com/channels/post_purchase/v2', 
        code : '141947f423', 
        customer_first_name : window.chData.order.customer.first_name, 
        customer_last_name : window.chData.order.customer.last_name, 
        customer_email : window.chData.order.customer.email
        }); 
      
    } 
    
  }); 
  
}