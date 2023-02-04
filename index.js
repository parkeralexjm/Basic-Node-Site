const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(content)
    })
  } else if (req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(content)
    })
  } else if (req.url === '/contact-me') {
    fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(content)
    })
  } else {
    fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'})
      res.end(content)
    })
  }
})

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => console.log(`Server running on: ${PORT}`));