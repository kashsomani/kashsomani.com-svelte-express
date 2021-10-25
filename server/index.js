const express = require('express')
const app = express()
const port = 4444
const path = require("path")

app.use(express.static('../client/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public", "index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})