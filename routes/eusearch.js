var http = require('http');
var express = require('express');
var router = express.Router();
var options = {
  hostname: 'data.theeuropeanlibrary.org',
  path: '/opensearch/json?apikey=isuveu6roioo1b1ip6dub3ffml&query=romanov',
  method: 'get',
};

/* GET EU library search listing. */
router.get('/eusearch', function(req, reseu, next) {
  var req = http.request(options, (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      if (!reseu.headersSent) {
        reseu.send(chunk);
      }
    });
  });
  req.end();
});

module.exports = router;
