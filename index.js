const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

// criação do endpoint /oi -> Olá, Mundo! 
app.get('/oi', function (req, res) {
  res.send('Olá, Mundo!')
})

app.listen(3000)