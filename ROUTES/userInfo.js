const express = require('express');
const route = express.Router()


route.get('/', (req, res)=>{

  res.json('get user')
})

route.post('/', (req, res)=>{
  const user = req.body
  res.send(user)
})

module.exports = route
