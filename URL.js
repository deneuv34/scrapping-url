var url = require('url');
var scrap = require('scrap');
var $ = require('cheerio');
var fs = require('fs');
var json = require('./url.json');

function Dummy(alamatUrl)
{
  this.url = alamatUrl
}
Dummy.prototype.scrapping = function(data){
  nama_file = url.parse(this.url, true).host;
  fs.writeFile('' + nama_file +'.txt', data , (err) => {
    if (err) throw err;
  });
}
Dummy.prototype.save = function(){
  var that = this;
  scrap(this.url, function(html, $) {
      var data = $('html').text().trim();
      that.scrapping(data);
    });
}
var web = [];
var i = 0;
for (var iterasi in json) {
    i++;
    web[i] = new Dummy(json[iterasi]);
    web[i].save();
}
