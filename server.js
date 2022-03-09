const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title>NodeJS</title></head>")
        res.write("<body><h2>Welcome to NodeJS</h2></body>")
        res.write("</html>")
        return res.end();
    } else if(req.url === "/home"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title>NodeJS</title></head>")
        res.write("<body><h2>Welcome to Home Page</h2></body>")
        res.write("</html>")
        return res.end();
    } else if(req.url === "/aboutus"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title>NodeJS</title></head>")
        res.write("<body><h2>Welcome to About us page</h2></body>")
        res.write("</html>")
        res.end();
    } else if(req.url === "/node"){
        res.setHeader("Content-Type", "text/html");
        res.write("<html>")
        res.write("<head><title>NodeJS</title></head>")
        res.write("<body><h2>Welcome to my node project</h2></body>")
        res.write("</html>")
        res.end();
    }
})

server.listen(3000);