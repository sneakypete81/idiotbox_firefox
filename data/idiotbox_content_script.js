// Create an "Idiotbox" link, which causes the video to be played in Idiotbox
// This is done by downloading a .idiotbox file from a companion website.

var regexp = /^http:\/\/www\.bbc\.co\.uk\/iplayer\/episode\/([^\/]*)\//;
var pid = regexp.exec(document.location.href)[1];

var link = document.createElement('a');
link.href = 'http://idiotboxproxy.aws.af.cm/iplayer/pid/' + pid;
link.textContent = "IdiotBox";

var list_item = document.createElement('li');
list_item.setAttribute('style', 'margin-left: 30px;');
list_item.appendChild(document.createTextNode(' '));
list_item.appendChild(link);

var heading_list = document.getElementById('blq-local-nav');
heading_list.appendChild(list_item);
