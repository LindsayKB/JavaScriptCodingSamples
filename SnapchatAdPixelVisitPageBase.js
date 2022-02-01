  let data = window.chData;
  let customerEmail = data.order.customer.email;
  (function(win, doc, sdk_url){
  if(win.snaptr) return;
  var tr=win.snaptr=function(){
  tr.handleRequest? tr.handleRequest.apply(tr, arguments):tr.queue.push(arguments);
};
  tr.queue = [];
  var s='script';
  var new_script_section=doc.createElement(s);
  new_script_section.async=!0;
  new_script_section.src=sdk_url;
  var insert_pos=doc.getElementsByTagName(s)[0];
  insert_pos.parentNode.insertBefore(new_script_section, insert_pos);
})(window, document, 'https://sc-static.net/scevent.min.js');

  snaptr('init','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',{
  'user_email':customerEmail
})
  snaptr('track','PAGE_VIEW');