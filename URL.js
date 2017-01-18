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
  console.log(this.url);
  nama_file = url.parse(this.url, true).host;
  fs.writeFile('' + nama_file +'.txt', data , (err) => {
    if (err) throw err;
  });
  return console.log('It\'s saved!');
}
Dummy.prototype.save = function(){
  var that = this;
  scrap(this.url, function(html, $) {
      var data = $('html').text().trim();
      console.log(that.scrapping(data));
    });
}
var web = [];
var i = 0;
for (var iterasi in json) {
  console.log(i);
    i++;
    console.log('iteration', iterasi);
    web[i] = new Dummy(json[iterasi]);
    web[i].save();
}
