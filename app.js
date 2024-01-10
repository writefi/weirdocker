const http = require('http');
//const http = require('node:http');

const f = Math.random();

const hostname = 'localhost';
const port = 7054;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(
`hello ${f} world\n`
);
});

server.listen(process.env.SERVER_PORT, () => {
  console.log(`Server ${f} running at http://${hostname}:${port}/`);
});
