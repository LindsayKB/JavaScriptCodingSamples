$( document ).ready(function() {
  //Check if note exists. If it does, get it
 if (window.CHDataObject.partial_type == "thank_you_page") {
    var additionalNote = sessionStorage.getItem("additionalNote", additionalNote);
      if ((additionalNote !== null) || (additionalNote !== undefined)) {
   		if (additionalNote.length > 0) {
          $(".CE__line-items").append("<div><strong>Order Notes:</strong> <p>" + additionalNote + "</p></div>");
       }
     }
  }
  else if (window.CHDataObject.partial_type == "checkout_page") {
    var additionalNote = window.CHDataObject.additionalNote;
      if ((additionalNote !== null) || (additionalNote !== undefined)) {
   		if (additionalNote.length > 0) {
             sessionStorage.setItem("additionalNote", additionalNote);
          $(".CE__line-items").append("<div><strong>Order Notes:</strong> <p>" + additionalNote + "</p></div>");
       }
     }
  }
   
});