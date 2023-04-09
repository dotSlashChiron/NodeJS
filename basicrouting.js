const express = require('express')
const app = express()
app.use('/static', express.static('public'))
app.get(/.*arva$/, (req, res) => {
    res.sendFile(__dirname + "/index.html")
    console.log(req.params)
})
app.get('/about/:Id?', (req, res) => {
    if (req.params.Id == undefined) {
        res.send("<h1>Hello</h1>")
    } else {
        res.send(`<h1>Your id is ${req.params.Id}</h1>`)
    }
})
app.get('/flights/:From?.:To?', (req, res) => {
    console.log(req.params.From)
    res.send("Flighting")
})
app.post('/about/all', (req, res) => {
    res.send("Innova")
})
app.listen(6969, () => {
    console.log("Started the sever on http://localhost:6969/ .\nAlt + Click to visit")
})