const mongoose = require('mongoose')


const Schema = mongoose.Schema


const castSchema = Schema({
    title:{type:String, required:true},
    description:{type:String, required:true},
    path:{type:String, required:true},


})

module.exports  =  mongoose.model('cast', castSchema)