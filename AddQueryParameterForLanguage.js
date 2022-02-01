//Function to retrieve the value
function getCookie( name ) {
  var dc,
      prefix,
      begin,
      end;
  dc = document.cookie;
  prefix = name + "=";
  begin = dc.indexOf("; " + prefix);
  end = dc.length;
  // default to end of the string
  // found, and not in first position
  if (begin !== -1) {
    // exclude the "; "
    begin += 2;
  }
  else {
    //see if cookie is in first position
    begin = dc.indexOf(prefix);
    // not found at all or found as a portion of another cookie name
    if (begin === -1 || begin !== 0 ) return null;
  }
  // if we find a ";" somewhere after the prefix position then "end" is that position,
  // otherwise it defaults to the end of the string
  if (dc.indexOf(";", begin) !== -1) {
    end = dc.indexOf(";", begin);
  }
  return decodeURI(dc.substring(begin + prefix.length, end) ).replace(/\"/g, '');
}


//Set the cookie here if you haven't already. Otherwise, remove this next line of code
document.cookie = "language=fr";


//Add the parameter and reload page
if (history.pushState) {
  var lang = getCookie('language');
  if (lang && !window.location.search.includes('language')) {
    var langQuery = 'language=' + lang;
    var newurl = window.location.href + (window.location.search ? '&' : '?') + langQuery;
    window.history.pushState({
      path:newurl}
                             , '', newurl);
  }
}
