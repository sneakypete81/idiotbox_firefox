// Create an "Idiotbox" link, which causes the video to be played in Idiotbox
// This is done by downloading a .idiotbox file from a companion website.

var regexp = /^http:\/\/www\.channel4\.com\/programmes\/([^\/]*)\/4od\#([^\/]*)/;
var result = regexp.exec(document.location.href);
var pid = result[2];

var link = document.createElement('a');
link.href = 'http://idiotboxproxy.aws.af.cm/channel4/pid/' + pid;
link.textContent = "IdiotBox";
link.setAttribute('class', 'my4od-button add-playlist active');
link.setAttribute('style', 'padding: 3px 6px 2px 6px;');

var button_bar = document.getElementsByClassName('episode-my4od-interact cf')[0];
button_bar.appendChild(link);
