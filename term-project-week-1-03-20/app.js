'use strict'

let express = require('express')
let app = express()
let data = ['Hello', 'Hey', 'How are you']

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', function (req, res) {
  res.render('index.ejs', {messages: data})
})
app.post('/', function (req, res) {
  console.log('Post')
})

app.listen(3000)
console.log('Running')
