const express = require('express')
const app = express()
app.use('/static',express.static('public'))

var validation = function(req,res,next){
    if(req.params.username==='pradeep'){
        console.log("User Validated")
    }else{
        console.log("User not Found")
    }
    console.log('Middleware Activated')
    next()
}
// app.use(validation)
app.get("/",(req,res)=>{
    res.send("200 OK")
})
app.get("/users/:username",validation,(req,res)=>{
    res.send(req.params.username)
})
app.listen(9000)