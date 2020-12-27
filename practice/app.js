const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>')
    res.write('<head>')
    res.write('</head>')
    res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"/><button type=""submit">Send</button></form></body>')
    res.write('</html>')
    return res.end();
  }
  if (url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    })
    req.on('end', () => {
      const parseBody = Buffer.concat(body).toString().split('=')[1];
      console.log(parseBody);
    })
    res.statusCode = 302;
    res.setHeader('Location', '/create-user');
    return res.end();
  }
  
  if (url === '/users') {
    res.write('<html>')
    res.write('<head>')
    res.write('</head>')
    res.write('<body><ul><li>user1</li><li>user2</li><li>user3</li></ul></body>')
    res.write('</html>')
    return res.end();
  }
})

server.listen(3001);