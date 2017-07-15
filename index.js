const express =  require('express')
const app = express()
const PORT = process.env.PORT || 3000
const path = require('path');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const userInfo = require('./ROUTES/userInfo')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api/user', userInfo)

app.get('/*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

if(process.env.NODE_ENV === 'production'){
    mongoose.connect(process.env.MONGODB_URI)
}
else {
    mongoose.connect('mongodb://localhost/salud')

}

const db = mongoose.connection
db.on('connect', ()=>{
  console.log('DB running');
})

app.listen(PORT, ()=>{
  console.log("server running");
})
console.log(process.env.NODE_ENV);
