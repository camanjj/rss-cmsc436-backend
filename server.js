'use strict'

var express = require('express')
var app = express()
const feeds = require('./feeds')

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

app.listen(port, function () {
  console.log('Example app listening on port %s', port)
})