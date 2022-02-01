(function () {
  if ( typeof window.CustomEvent === "function" ) return false;
  function CustomEvent ( event, params ) {
    params = params || {
      bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
  }
  window.CustomEvent = CustomEvent;
}
)();
/*
"variantCategory" represents each variant category on your page, in order.
For each "variantCategory", replace the value with the number you identified as the position of the option you want to select.
*/
var variantOption = [
  {
    variantCategory: 2}
  , //Variant Selector 1
];
/*DO NOT MODIFY BELOW THIS LINE*/
function chooseVariant(){
  for (var i = 0; i < variantOption.length; i++){
    if (variantOption[i].variantCategory != null){
      variantOption[i].variantCategory--
      var variantSelect = document.querySelectorAll('select.select-variant-selector-component')[i];
      if (variantSelect) {
        variantSelect.selectedIndex = variantOption[i].variantCategory;
        var clickEvent = new CustomEvent('click', {
          type: 'click',
          bubbles: false,
          cancelable: true,
        }
                                        );
        var changeEvent = new CustomEvent('change', {
          type: 'change',
          bubbles: false,
          cancelable: true,
        }
                                         );
        variantSelect.dispatchEvent(clickEvent);
        variantSelect.dispatchEvent(changeEvent);
        variantSelect.style.display = "none";
        variantSelect.parentNode.style.display = "none";
      }
    };
  }
};
chooseVariant();