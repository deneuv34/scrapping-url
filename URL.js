var url = require('url');
var scrap = require('scrap');
var $ = require('cheerio');
var fs = require('fs');
console.log($);
function Dummy(alamatUrl)
{
  this.url = alamatUrl
}
Dummy.prototype.scrapping = function(data){

  nama_file = url.parse(this.url, true).host;
  fs.writeFile('' + nama_file +'.txt', data , (err) => {
    if (err) throw err;
  });
  return console.log('It\'s saved!');
}


var web1 = new Dummy('http://refactory.id');
scrap(web1.url, function(html, $) {
var data = $('html').text().trim();
console.log(web1.scrapping(data));
});

var web2 = new Dummy('https://idntimes.com');
scrap(web1.url, function(html, $) {
var data = $('html').text().trim();
console.log(web1.scrapping(data));
});
