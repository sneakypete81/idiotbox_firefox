// Create an "Idiotbox" link, which causes the video to be played in Idiotbox
// This is done by downloading a .idiotbox file from a companion website.

var regexp = /^http:\/\/www\.bbc\.co\.uk\/iplayer\/episode\/([^\/]*)\//;
var pid = regexp.exec(document.location.href)[1];

var icon = document.createElement("i");
icon.setAttribute("class", "icon tviplayericon tviplayericon-download");

var link = document.createElement('a');
link.setAttribute("class", "link")
link.href = 'http://idiotboxproxy.aws.af.cm/iplayer/pid/' + pid;
link.textContent = "Play on IdiotBox";
link.appendChild(icon);

var list_item = document.createElement('li');
list_item.appendChild(link);

var heading_list = document.getElementById("external").getElementsByTagName("ul")[0];
heading_list.insertBefore(list_item, heading_list.firstChild);
