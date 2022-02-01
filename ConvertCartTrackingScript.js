var ls = localStorage.getItem('namespace.visited');
if (ls == null) {
   /*First time visit. Run the script*/
    localStorage.setItem('namespace.visited', 1);
      let ccData = window.chData;
      var ccOrderId = ccData.order.order_id;
      var ccOrderNumber = ccData.order.order_number;
      var ccOrderName = ccData.order.customer.first_name + " " + ccData.order.customer.last_name;
      var ccOrderAmount = ccData.order.subtotal_price;
      var ccOrderCurrency = ccData.order.currency;
       
      console.log("Order ID: " + ccOrderId);
      console.log("Order Number: " + ccOrderNumber);
      console.log("Order Name: " + ccOrderName);
      console.log("Order Amount: " + ccOrderAmount);
      console.log("Order Currency: " + ccOrderCurrency);
      window.ccLayer = window.ccLayer || [];
       ccLayer.push({
          ccEvent: 'orderCompleted',
          orderId: ccOrderNumber,
          total: ccOrderAmount,
          currency: ccOrderCurrency,
          src: 'custom',    
      });
}