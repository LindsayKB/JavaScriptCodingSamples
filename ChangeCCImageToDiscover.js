var discoverCard = function() {
  var imageUrl = "PUTIMAGEURLHERE";
  //Target JCB image
  //Change image
  $("ul.bordered-ul li:not(.extended-li) .checkbox-row .payments .img.jcb").css("background-image", "url(" + imageUrl + ")");

  //Add styling
  $("ul.bordered-ul li:not(.extended-li) .checkbox-row .payments .img.jcb").css("background-repeat", "no-repeat");
  $("ul.bordered-ul li:not(.extended-li) .checkbox-row .payments .img.jcb").css("background-size", "cover");
  $("ul.bordered-ul li:not(.extended-li) .checkbox-row .payments .img.jcb").css("background-position", "0px");
  
  //Hide 'and more'
  $("ul.bordered-ul li:not(.extended-li) .checkbox-row .payments .and-more").css("display","none");
}

$( document ).ready(function() {
  //Hide page until correct URL is detected
  setTimeout(discoverCard, 100);
});