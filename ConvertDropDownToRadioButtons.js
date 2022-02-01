$('.product-description').append('<div id="bundles"></div>');
$(".select-variant-selector-component option").each(function(i, e) {
  $("<input type='radio' name='r' />")
    .attr("value", $(this).val())
    .attr("checked", i == 0)
    .click(function () {
    $("#d").val($(this).val());
  }
          )
    .text("Value")
    .appendTo("#bundles");
  var currentLabel = $("input[value='" + $(this).val() +"']");
  $("<label>").text($(this).val()).insertAfter(currentLabel);
}
                                                   );
$(".select-variant-selector-component").css("display","none");
$(".design-variant-selector").css("display","none");
