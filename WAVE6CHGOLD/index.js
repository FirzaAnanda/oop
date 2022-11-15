const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("Halo world")
})

app.listen(3000, () => {
  console.log("RUNNING ON PORT 3000")
})