class AppError extends Error{
    constructor(message,statusCode){
        super()
      this.statusCode=statusCode;
      this.message=message;
      this.status=`${statusCode}`.startsWith('4')?'error':'fail';
      this.isOperationalError=true;
    }
}
module.exports=AppError;