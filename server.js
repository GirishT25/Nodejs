const http =  require('http');

const server = http.createServer((req , res)=>{ // the Http server is created and the req and res is created in the callback
console.log(req, 'Hello'); // it get the request from the server 
res.writeHead(200 , {"Content-type" :"text/plain"}); // this is writeHead i.e it written the content in plain format text
res.end('Hello from the Nodejs'); // it send the response form the server end

});

const port = 3000;
server.listen(port ,()=>{
    console.log(`Server is listening on the port ${port}`);
});