const AppError=require("../Utils/AppError");

const sendDuplicatekeyError=()=>{
    const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
    console.log(value);
  
    const message = `Duplicate field value: ${value}. Please use another value!`
 return new AppError(message,400);
}
const sendCastError=()=>{
    const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
}
const sendValidationError=()=>{
    const errors = Object.values(err.errors).map(el => el.message);

    const message = `Invalid input data. ${errors.join('. ')}`;
    return new AppError(message, 400);
}
const sendJsonWebTokenError=()=>new AppError('Invalid token,Please log in again!',404);
const sendTokenExpiredError=()=>new AppError('Token Expired,Please log in again!',404);




const sendDev=(res,err)=>{
    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
        err:err,
        stack:err.stack
    })
}
const sendProd=(err,res)=>{
    if(err.isOperationalError===true)
    {
      res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
      })
    }
    else{
        res.status(500).json({
            status:"Internal server error",
            message:"something went wrong"
        })

    }
}



module.exports=((err,req,res,next)=>{
   err.statusCode=err.statusCode||500;
   err.status=err.status||'error'
   
   if(process.env.Node_env==="developmemt")
   {
   sendDev(err,res)
   }
   else{
    const error={...err}
    if(error.name==='CastError')error=sendCastError();
    if(error.name==='ValidationError')error=sendValidationError();
  if(error.name==='JsonWebTokenError')error=sendJsonWebTokenError();
  if(error.name==='TokenExpiredError')error=sendTokenExpiredError();
   if(error.code===11000)error=sendDuplicatekeyError();
console.log(error)
   sendProd(error,res)
   }
})