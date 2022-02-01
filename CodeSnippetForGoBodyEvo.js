//Place this in your theme.liquid file in between <script> and </script> tags

var search = location.search.substring(1);
if (search) {
    var params = JSON.parse('{"' + search.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) });
    var noteAttributeElements = '<div style="display:none;">';
    for (const noteKey in params) {
        noteAttributeElements += '<input id="' + noteKey + '" ' + 'value="' + params[noteKey] + '" ' + 'name="attributes-' + noteKey + '"' + '>';
    }
    noteAttributeElements += + '</div>';
    $("body").append(noteAttributeElements);
}