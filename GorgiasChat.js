let script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://config.gorgias.io/production/[redacted]/chat/[redacted].js';
let script2 = document.createElement('script');
var inlineScript = document.createTextNode("window.gorgiasChatParameters = {}");
script2.appendChild(inlineScript);
document.getElementById('gorgias-chat').appendChild(script2);
document.getElementById('gorgias-chat').appendChild(script);
