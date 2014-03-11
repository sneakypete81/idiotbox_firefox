// Create an IMDB Link

var regexp = /^BBC iPlayer - (.*)/;
var title = regexp.exec(document.title)[1];

var abbr = document.createElement("abbr");
abbr.setAttribute("class", "item");
abbr.setAttribute("title", "IMDB");
abbr.setAttribute("style", "width: 28px; left: 10px;");
abbr.textContent = "IMDB";

var link = document.createElement("a");
link.setAttribute("class", "link")
link.href = "http://www.imdb.com/find?q=" + title;
link.textContent = "Look up on IMDB";
link.appendChild(abbr);

var list_item = document.createElement("li");
list_item.appendChild(link);

var heading_list = document.getElementById("external").getElementsByTagName("ul")[0];
heading_list.insertBefore(list_item, heading_list.firstChild);
