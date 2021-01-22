require('dotenv').config()

var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

const port = 3000;



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})