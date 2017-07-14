import express from 'express'
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');

app.use(express.static('public'))

app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, ()=>{
  console.log("server running");
})
