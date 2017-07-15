const express = require('express');
const route = express.Router()
const userInfo = require('../Models/userInfo');


route.get('/', (req, res)=>{
  res.json('get user')
})

route.post('/', (req, res)=>{
  const user = req.body
  userInfo.create(user, (err, user)=>{
if(err){console.log(user)}
else {
  res.json(user)
}
  })
})

module.exports = route
