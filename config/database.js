const mongoose=require('mongoose');

const db=()=>{

    mongoose.connect("MONGO_URL",{
        useNewUrlParser:true,
        
    })
}

module.exports=db