var pageMod = require("sdk/page-mod");
var self = require("sdk/self");

pageMod.PageMod({
  include: "http://www.bbc.co.uk/iplayer/episode/*",
  contentScriptFile: [self.data.url("imdb_content_script.js"),
                      self.data.url("idiotbox_content_script.js")
                      ]
});

pageMod.PageMod({
  include: "http://www.channel4.com/programmes/*",
  contentScriptFile: [self.data.url("idiotbox_content_script_4od.js")]
});
