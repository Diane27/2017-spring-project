'use strict'

let express = require('express')
let app = express()
let data = ['Hello', 'Hey', 'How are you']

app.set('view engine', 'ejs')
app.get('/', function (req, res) {
  res.render('index.ejs', {messages: data})
})

app.listen(3000)
