var mongoose = require('mongoose')
var kittySchema = new mongoose.Schema({
    name: String,
    emailID: String,
    type: String,
    length: Number,
    volume: Number
})
var kittenModel = mongoose.model('Kitten',kittySchema);
var kittens = new kittenModel({
    name: "Oreo",
    email: "orea@gmail.com",
    type: "stray cat",
    length: 8,
    volume: 24
})
console.log(kittens)