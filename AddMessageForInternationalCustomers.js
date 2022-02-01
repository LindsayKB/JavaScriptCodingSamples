$(document).ready(function() {
  $("shipping-component").prepend("<span class='intlMsg' style='display:none;'><p><span style='color:red;'>PLEASE NOTE:</span> As with all international shipments, additional customs charges may apply upon delivery. The customer is solely responsible for these changes and for complying with any other restrictions or regulations in their country.(<a href='LINKGOESHERE'>Learn more</a>)</p></span>");
  setTimeout(function(){
    shippingCountry();
  }
             , 2000);
  $("select[name='country']").change( function() {
    console.log("Country change");
    shippingCountry();
  }
                                    );
  function shippingCountry() {
    console.log("Function has been called!");
    var countryValue = $("#shipping_country").val();
    console.log(countryValue);
    if (countryValue != "United States")
    {
      $(".intlMsg").css("display","block");
    }
    else {
      $(".intlMsg").css("display","none");
    }
    console.log($(".intlMsg").html());
  }
}
                 );
