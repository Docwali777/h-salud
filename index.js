const express =  require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');

const userInfo = require('./Models/userInfo')

app.use(express.static('public'))

app.use('/api/user', userInfo)

app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.listen(PORT, ()=>{
  console.log("server running");
})
