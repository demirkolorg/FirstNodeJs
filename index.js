const express =require('express');
const cors= require('cors');
const dotenv=require('dotenv');

dotenv.config()

const app=express();


app.use(cors());

app.get('/',(req,res)=>{
    res.json({message:"Hello World!"})
})

const PORT=process.env.PORT||7777;

app.listen(PORT,()=>{
    console.log("server is running on port: "+PORT)
})