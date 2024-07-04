const express = require('express')
require('dotenv').config()
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get("/instagram",(req,res)=>{
    res.send("<h1>WELCOME TO INSTGRAM</h1>")
})
app.get("/login",(req,res)=>{
    res.send("<h2>Enter your detailss</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})