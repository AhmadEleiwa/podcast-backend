const Cast = require("../models/Cast")

const getCasts = async (req,res,next) =>{ 

    return res.json({message:'im just testing around'})
}


const addTestCast = async (req, res ,next)=>{
    let cast = new Cast({title:"Test cast", description:'Test descritpion'})
    await cast.save()
    return res.json({message:'Test cast added checkout'})
}



exports.getCasts = getCasts
exports.addTestCast = addTestCast
