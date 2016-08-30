var http = require('http');
var express = require('express');
var router = express.Router();
var querystring = require("querystring");

var options = {
  hostname: 'data.theeuropeanlibrary.org',
  path: '/opensearch/json?apikey=isuveu6roioo1b1ip6dub3ffml&',
  method: 'get'
};

/* GET EU library search listing. */
router.get('/eusearch', function(req, reseu, next) {
  options.path = options.path + querystring.stringify(req.query);
  var req = http.request(options, (res) => {
    var body = '';
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      body += chunk;
    });
    res.on('end', () => {
      if (!reseu.headersSent) {
        reseu.send(JSON.parse(body));
      }
    });

  });
  req.end();
});

module.exports = router;
