$( document ).ready(function() {
  var checkForErrorVal = setInterval(checkForError, 50);
  function checkForError() {
    if ($('.btn-green .alert-danger').length > 0) {
      stopLoop();
      var currentErrorContent = $('.btn-green .alert-danger .ch-btn-error-message').text();
      console.log(currentErrorContent);
      if (currentErrorContent == "Declined (Code: 2046)") {
        $('.btn-green .alert-danger .ch-btn-error-message').html("<span>Your bank is unwilling to accept the transaction. For debit/credit card transactions, please contact your bank for more details regarding this generic decline; if this is a PayPal transaction, please contact PayPal</span>");
      }
      else if (currentErrorContent == "An internal exception was encountered. Your credit card may have been charged. Please contact support before retrying the transaction.") {
        $('.btn-green .alert-danger .ch-btn-error-message').html("<span>Your bank is unwilling to accept the transaction. Please contact your bank for more details. (Code: 2000)</span>");
      }
      else if (currentErrorContent == "Do Not Honor (Code: 2000)") {
        $('.btn-green .alert-danger .ch-btn-error-message').html("<span>Your bank is unwilling to accept the transaction. Please contact your bank for more details. (Code: 2000)</span>");
      }
      else {
        //If you want to test with any other error messages not stated above, uncomment the line below
       // $('.btn-green .alert-danger .ch-btn-error-message').html("<span>Your bank is unwilling to accept the transaction. Please contact your bank for more details. (Code: 2000)</span>");
     
      }
    }
    else {
      //Keep going
    }
  }
  function stopLoop() {
    clearInterval(checkForErrorVal);
  }
}
                   );