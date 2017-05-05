'use strict'

var express = require('express')
var app = express()
const querystring = require("querystring");
const feeds = require('./feeds')
const summary = require('node-summary');
const request = require('request');

let port = (process.env.SERVER_PORT || process.env.PORT || 5000 )

app.get('/', function (req, res) {
  res.send( {
    Sports: feeds.sports(),
    Tech: feeds.tech(),
    Business: feeds.business(),
    Science: feeds.science(),
    Health: feeds.health(),
    World: feeds.world()
  })
})

app.get('/tldr', (req, res) => {
  const url = req.query.url;
  
  // const encoded_url = querystring.escape(url);

  var options = {
    url: "http://api.smmry.com",
    method: "GET",
    qs: {
      'SM_URL': url,
      'SM_API_KEY': process.env.SMMRY_KEY
    }
  }

  request(options, function (error, response, body) {
    console.log(body);
    res.send(body);
  })

})

app.listen(port, function () {
  console.log('Example app listening on port %s', port)
})