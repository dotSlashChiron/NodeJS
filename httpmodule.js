//HTTP Module
const http = require('http');
const server = http.createServer((req,res)=>{
    //text/plain for plain text
    //text/html for html
    res.writeHead(200,{
        "content-type":"text/html"
    })
    res.write("<h1>Anime Manga</h1>");
    res.end();
}).listen(9999,()=>{
    console.log("Server Running on port localhost:9999")
});
