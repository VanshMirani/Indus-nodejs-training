var http = require('http')
var a = 10
var b =200
var c =a+b
var msg
if (c==30){
    msg = "Sum is 30"
}else{
    msg = "Sum is not 30"
}
http.createServer((req, res)=> {
   res.writeHead(200, {'Content-Type': 'text/html'})
   res.write("A value is " + a)
   res.write("<br>B value is " + b)
   res.write(`<br/><b>Sum is ${c}</b>`)
   res.end("<br/>" + msg+ "Done")
}).listen(5000)

console.log("Server is started on http://localhost:5000")   