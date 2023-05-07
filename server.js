const express = require('express')
const bodyParser = require('body-parser')
const castRoutes = require('./routes/castRoutes')
const mongose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express()


app.use(bodyParser.json())

app.use('/api/cast', castRoutes)
// app.use('/api/', userRoutes)

app.use('/', (req, res, next) =>{
    return res.json({test:'test'})
})

mongose.connect(process.env.mongoPath, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('connect to database')
    app.listen(5000)
    console.log('list in port 5000')

}).catch((err)=>{
    console.log(err)
})