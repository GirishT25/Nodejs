const http = require('http');

const server = http.createServer((req, res)=>{
    const url =  req.url; // we get the url fromt the server and create the route according to us
    if(url === '/'){  // here we check the url wether it is on home page and send the data
        res.writeHead(200 ,{"Content-type" : "text/plain"}); // 
        res.end("This is the HomePage"); // resposne is send
    }
    else if(url === '/projects'){ // '/projects' route is created and the resposes is send on this route
        res.writeHead(200 ,{"Content-type" : "text/plain"});
        res.end("This is an Projects page")
    }
    else{
        res.writeHead(400 ,{"Content-type" : "text/plain"});
        res.end("This page not found");
    }

})

const port = 3000;
server.listen(port , ()=>{
    console.log(`Server is listening on the ${port}`);
})