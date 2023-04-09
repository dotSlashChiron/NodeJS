const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use('/static',express.static('public'))
app.set('view engine', 'twig')
app.set('views','./public/views')

// app.get('/:a?-:b?',(req,res)=>{
//     res.render('index',{
//         title: "Toyota Fortuner",
//         sum: parseInt(req.params.a)+parseInt(req.params.b)
//     });
// })
app.post('/',(req,res)=>{
    res.render('loginfile',{
        title: "Login",
        username: req.body.username,
        password: req.body.password
    });
})
app.listen(8324)