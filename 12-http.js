const http = require('http');

const server = http.createServer((req, res)=>{
  if (req.url === '/'){
    res.end('Welcome to the home page');
  }
  if (req.url === '/about'){
    res.end('About Page');
  }

  res.end(
    `
    <h1> OOps! </h1>
    <p>We can't seem to find this Page</p>
    <a href="/">Home Page </a>
    `
  )
})

server.listen(5000)