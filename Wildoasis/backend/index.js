const express=require('express');
const app=express();
app.get('/',(req,res)=>{
    res.status(200).json("hello from server")
})
app.listen(3000,()=>{
    console.log("data base is connected"
    )
})
