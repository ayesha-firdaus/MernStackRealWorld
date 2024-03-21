const app=require("./app")
const port=3000;
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();
mongoose.connect(process.env.database).then(con=>{
    console.log("database connected sucessfully")
})
app.listen(port,()=>{
    console.log("data base is connected"
    )
})
