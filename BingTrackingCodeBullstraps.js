if (window.chData) {
    // Load tracking code. Make sure the ti="" is the correct tracking ID for them - assuming you'll load the FB pixel and bing example like here

(function(w,d,t,r,u){
  var f,n,i;w[u]=w[u]||[],f=function(){
    var o={
      ti:"<YOUR_ID>"
      
    };
    o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")
    
  },
  n=d.createElement(t),n.src=r,n.async=1,
  n.onload=n.onreadystatechange=function(){
    var s=this.readyState;
    s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},
    i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)
  
})(window,document,"script","//bat.bing.com/bat.js","uetq");
    // The trackign values implementation
    // Set a data variable from window.chData
    let data = window.chData;
    console.log(data);

    // If this isn't the checkout page purchase, stop here.
    if (data.last_charged_page_type == 'checkout_page') {
        let currency = data.order.currency;
        

        // These are the last charged line items for the previous page
        var lastChargedLineItems = data.order.last_charged_line_items;

        var totalPrice = 0;
        var totalTax = 0;

        for (var i = 0; i < lastChargedLineItems.length; i++) {

            let currentLineItem = lastChargedLineItems[i];

            // Calculate total tax up to this point
            totalTax += parseFloat(currentLineItem.tax_amount) * parseInt(currentLineItem.quantity);

            // Calculate total price up to this point
            totalPrice += (parseFloat(currentLineItem.price) + parseFloat(currentLineItem.tax_amount)) * parseInt(currentLineItem.quantity);
        }

        // Now get the total shipping rates charged, if any apply (upsells might not have them) 
        let shippingRates = data.order.last_charged_shipping_rates;
        let totalShipping = 0;

        // Calculate total shipping
        for (var i = 0; i < shippingRates; i++) {
            totalShipping += parseFloat(shippingRates[i].price);
        }

        // This can be adjusted to track it differently according to needs
        let revenueValue = totalPrice + totalTax + totalShipping;
      console.log("Revenue: " + revenueValue);

         window.uetq = window.uetq || []; 
   window.uetq.push({ 'gv': revenueValue, 'gc': currency }); 
    }

}