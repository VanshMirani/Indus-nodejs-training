var http = require('http')

http.createServer((req, res)=> {
    res.end("<h1>Hello Node Server 123</h1>") 
}).listen(4000)

console.log("Server is started on http://localhost:4000")