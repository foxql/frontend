require('dotenv').config()

var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

const port = process.env.PRODUCT_PORT;



app.listen(port, process.env.PRODUCT_HOST, () => {
  console.log(`App listening on port ${port}`)
})