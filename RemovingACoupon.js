$( ".ch-coupon-form .applied-coupon .fa-remove" ).click(function() {
      $(".applied-coupons-row").remove();
       $("#coupon_code").prop("disabled", false); 
    });