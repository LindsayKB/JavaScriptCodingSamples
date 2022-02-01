$( document ).ready(function() {
    var lollipop = '<div id="refcandy-lollipop" data-id="shfk80fesbw52pq5pfqgb0hxv" data-fname="' + window.chData.order.customer.first_name + '" data-lname="' + window.chData.order.customer.last_name + '" data-email="' + window.chData.order.customer.email + '" ></div>';
    $('body').append(lollipop);
     !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s); js.id =id;js.defer=true;js.src="https://portal.referralcandy.com/assets/widgets/refcandy-lollipop.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","refcandy-lollipop-js");
     console.log(lollipop);
if (!$('#refcandy-lollipop').length) {
        console.log("RefCandy Lollipop pop-up is not included");
    }
else {
 console.log("Found the RefCandy Lollipop pop-up!");
}
});