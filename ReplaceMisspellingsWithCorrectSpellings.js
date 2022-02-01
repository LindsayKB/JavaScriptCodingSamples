$( document ).ready(function() {
  setTimeout(function(){
    $( ".cart-line-items-v2 .title-container .line-variant-title" ).each(function() {
      $(this).html($(this).html().replace('MONT','month'));
      $(this).html($(this).html().replace('MONTS','months'));
      $(this).html($(this).html().replace('DAS','days'));
    });
  }, 200);
});