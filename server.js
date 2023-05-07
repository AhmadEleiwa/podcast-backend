const express = require('express')
const bodyParser = require('body-parser')
const castRoutes = require('./routes/castRoutes')

const app = express()


app.use(bodyParser.json())

app.use('/api/cast', castRoutes)
// app.use('/api/', userRoutes)

app.use('/', (req, res, next) =>{
    return res.json({test:'test'})
})


app.listen(5000)