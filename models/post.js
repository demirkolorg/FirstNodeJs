const mongoose=require('mongoose')

const PostSchema=new mongoose.Schema({
    
    title:{
        type:String,
        require:true,
        trim:true
    },
    desc:{
        type:String,
        require:true
    },
    stock:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:new Date()
    },
})

module.exports =mongoose.model('post',PostSchema)