$( ".product-thumbnails img" ).each(function() {
  if ($(this).attr("src").indexOf(".gif") > -1) {
     $(this).css("display","none");
  }
});