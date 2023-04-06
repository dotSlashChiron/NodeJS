const fs = require('fs')
// fs.readFile(__dirname + "/hello.txt", 'utf-8', (err, data) => {
//     console.log(data);
// })
try {
    const data = fs.readFileSync(__dirname + "/hello.txt", 'utf-8')
    console.log(data)
} catch (e) {
    console.log(e)
}
console.log("Program ended successfully")