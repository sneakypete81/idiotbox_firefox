// Create an IMDB Link

var regexp = /^BBC iPlayer - (.*)/;
var title = regexp.exec(document.title)[1];

var link = document.createElement('a');
link.href = 'http://www.imdb.com/find?q='+title;
link.textContent = "IMDB";

var list_item = document.createElement('li');
list_item.setAttribute('style', 'margin-left: 30px;');
list_item.appendChild(document.createTextNode(' '));
list_item.appendChild(link);

var heading_list = document.getElementById('blq-local-nav');
heading_list.appendChild(list_item);
