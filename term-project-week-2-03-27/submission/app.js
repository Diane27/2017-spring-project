'use strict'

let express = require('express')
let app = express()

app.use('/', express.static(__dirname))
app.get('/', function (req, res) {
  res.sendfile('index.html', {root: __dirname})
})

app.listen(3000)
console.log('On port 3000')
