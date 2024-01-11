const http = require('http');

const f = Math.random();

const hostname = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(
`hello ${f} world\n`
);
});

server.listen(port, () => {
  console.log(`Server ${f} running on port ${port}/`);
});
