document.querySelector('span.ch-custom-label').innerText = 'Keep me up to date on news and exclusive offers by email';

// Initializing Convert script

$.getScript("//cdn-3.convertexperiments.com/js/10033834-1003877.js");

// Initializing page and chData

CH.event(
  function (EVENT, data) {
    if (EVENT == "INITIATED_PAGE") {
      let cartData = data.cart_data;
      let lineItems = cartData.line_items;
      let contents = [];
      let content_ids = [];
      let item_cnt = 0;
      lineItems.forEach(function (el) {
        content_ids.push(el.id.toString());
        contents.push({
          id: el.sku,
          quantity: el.quantity,
          price: el.line_price,
          name: el.title
        });
        item_cnt += parseInt(el.quantity);
      });
      

// GA event for Contact info step, triggered at the page load

      gtag("event", "begin_checkout", {
        event_category: "Shopify (Littledata)",
        event_label: "Contact information",
        event_action: "Checkout",
        currency: cartData.currency,
        items: contents,
        coupon: cartData.coupon,
        checkout_step: 1
      });
      
      var contact_info = document.getElementById("customer_email");
      var shipping_info = document.getElementById("shipping_zip");
      
// GA event for Shipping info step, triggered on leaving email field
// we are intentionally removing the event listener to avoid event repetitions

      contact_info.addEventListener("blur", listen_contact);
      function listen_contact() {
        gtag("event", "checkout_progress", {
          event_category: "Shopify (Littledata)",
          event_label: "Shipping information",
          event_action: "Checkout",
          currency: cartData.currency,
          items: contents,
          coupon: cartData.coupon,
          checkout_step: 2
        });
        contact_info.removeEventListener("blur", listen_contact);
      }
      
// GA event for Payment info step, triggered on leaving ZIP/postal field

      shipping_info.addEventListener("blur", listen_shipping);
      function listen_shipping() {
        gtag("event", "checkout_progress", {
          event_category: "Shopify (Littledata)",
          event_label: "Payment method",
          event_action: "Checkout",
          currency: cartData.currency,
          items: contents,
          coupon: cartData.coupon,
          checkout_step: 3
        });
        shipping_info.removeEventListener("blur", listen_shipping);
      }
      
// Adding review stars
      
      function addReviewStars()
      {
        var clonedLine = $('.cart-line-item-container').eq(0).find('.line-variant-title').clone();
        $(clonedLine).html('<span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span>');
        $('.cart-line-item-container').eq(0).find('.line-variant-title').after(clonedLine);
      }
    
      function setEmailPrefill() {
        var klaviyoPrefill = localStorage.getItem('klaviyoEmail');
        var justunoPrefill = localStorage.getItem('junoSubscriptionEmail');
    
        var setPrefill = null;
    
        if(justunoPrefill !== null)
        {
            setPrefill = justunoPrefill;
        }
    
        if(klaviyoPrefill !== null)
        {
            setPrefill = klaviyoPrefill;
        }
        
        $('input[name="email"]').val(setPrefill);
      }

      function styleSMSBox()
      {
        var smsHeadlineText = "Get 25% Off Next Order of Whitening Refills";
        var smsSublineText = "Sign up to SNOW's VIP list and we'll text you a coupon code off your next order";
    
        //style the box
        $('#ps__container').css({
            'border-radius': '4px',
            'background-color': '#fafafa',
            'border': 'solid 1px #e6e6e6',
            'padding': '12px'
        });
    
        //append row
        $('customer-fieldset .row').append('<div id="sms-optin-row" class="col-12"></div>');
    
        //move container into row
        $('#sms-optin-row').append($('#ps__container'))
    
        //change text and clone text row
        var customLabelClone = $('#ps__container').find('.ch-custom-label').text(smsHeadlineText).clone();
    
        //change text of cloned row
        $(customLabelClone).text(smsSublineText)
    
        //append clone row
        $('label[for="ps_accepts_sms"]').append(customLabelClone);
    
        //add some spacing
        $('label[for="ps_accepts_sms"]').after('<br>')
    
        //style the top text row bold
        $('#ps__container').find('.ch-custom-label').eq(0).css({'font-weight': 'bold'});
      }

      addReviewStars();
      setEmailPrefill();
      
      
      var existCondition = setInterval(function() {
       if ($('#ps__container').length) {
          clearInterval(existCondition);
          styleSMSBox();
       }
      }, 100);

    }
  },
  function (EVENT, error) {
    console.log(EVENT, error);
  }
);