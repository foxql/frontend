require('dotenv').config()

var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

const port = process.env.PRODUCT_PORT || 3000;
const host = process.env.PRODUCT_HOST || '0.0.0.0';



app.listen(port, host, () => {
  console.log(`App listening on port ${port}`)
})