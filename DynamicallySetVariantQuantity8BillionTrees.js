//Get param from the URL 
var quantity;
var quantityVariant;
var url = window.location.href;
if (!quantity) {
  if (url.indexOf("quantity") > -1) {
    var quantity = getParameterByName('quantity');
 }
}

//Loop through array to assign the correct number variant

var variables = [1000, 2000, 3000]; //Note that this array will need to be edited per your variant set-up and will need to be maintained by your team
for (var i = 0; i < variables.length; i++) {
  if (variables[i] = quantity) {
    //Assign number and adjust since arrays start at 0 but variants begin at 1
    quantityVariant = i + 1;
  }
}
 
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


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
    variantCategory: quantityVariant}
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