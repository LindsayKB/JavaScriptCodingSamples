$('.addToCartRedirect').click(function(event) {
  /*Prevent default action of any other JavaScript functions included in the theme that adds an item to the cart */
  event.preventDefault();
  
  /*Get selected variant from Shopify Liquid variable
  var selectedVariant = {{ product.selected_or_first_available_variant.id | json}}
  
  /*Check that the variant is the actual selected variant */ 
  /*Get variant ID from URL*/
  var urlParams = new URLSearchParams(window.location.search);
  var variantURLVal = urlParams.get("variant");
  
  /*If a value was retrieved from URL, then compare the variants. If not, skip ahead */
  if (variantURLVal != null) {
      /*If the variant retrieved from the button click doesn't match the URL, replace with the new variant ID */
      if (selectedVariant != variantURLVal) {
          selectedVariant = variantURLVal;
      }
  }
  /*Add to cart*/  
   jQuery.post("/cart/add.js", {
       items: [
          {
             quantity: 1,
             id: selectedVariant
           }
 
       ]
    })
 
    //Redirect
    window.location.href = "/checkout"; 
});