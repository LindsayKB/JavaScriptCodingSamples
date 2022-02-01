//Get order value
var orderValue;
setInterval(function() {
    orderValue = $(".ch-total-price .ch-value .ch-placeholder").text().replace("$",'').trim();
}, 1000);
document.querySelector('.ch-accept-button').addEventListener('click', function (e) {
	if (orderValue >= 1.00) {
		// Complete purchase
		$("order-summary-component .text-danger").css("display","none");
	  
	}
	else {
	  e.stopImmediatePropagation();
	  $("order-summary-component").append("<div class='text-danger' style='display:block;'><span>Please order a minimum of $1</span></div>");
	  $('html, body').animate({
        scrollTop: parseInt($("order-summary-component").offset().top)
    }, 500);
	}
}, true);