const globalerrorHandler=require("./Controllers/errorController");
const express=require('express');
const AppError = require('./Utils/AppError');
const cabinRouter=require("./Routes/cabinsRoute");
const app=express();
app.use(express.json())


app.get('/',(req,res)=>{
    res.status(200).json("hello from server")
})
app.use("/api/cabin",cabinRouter);
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });
  app.use(globalerrorHandler);
 
module.exports=app;
