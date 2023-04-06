const express = require('express')
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello Baby")
})
app.get("/users",(req,res)=>{
    res.send("Hello User")
})
app.listen(2625,()=>{
    console.log("Server is running on port 2625")
})