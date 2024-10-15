import express from "express"
import router from "./router.js"
import  Connection  from "./connection.js"
import env from "dotenv"

env.config()
let app=express()
app.use (express.static("client side"))
app.use(express.json())
app.use("api",router)

Connection.then(()=>{
    console.log("database connected");
    
    app.listen(process.env.PORT())
    console.log(`http://localhost:${process.env.PORT}`);
   
    
}).catch((error)=>{
console.log(error);

})
