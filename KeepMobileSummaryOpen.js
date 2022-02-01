$(document).ready(function() {
  CH.event(function(INITIATED_PAGE, data) {
   $('div.mobile-summary-switch').unbind('click');
    $("#mobile-summary-switch-target").css("height", "auto");
  })
});