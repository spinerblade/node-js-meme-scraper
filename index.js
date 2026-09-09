// Make HTTP request to the server at URL  https://memegen-link-examples-upleveled.netlify.app/
import http from 'http';
import https from 'https';

https.get('https://memegen-link-examples-upleveled.netlify.app/', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });
  resp.on('end', () => {
    console.log(data);
  });
});

// // Create a local server to receive data from
// const server = http.createServer();

// // Listen to the request event
// server.on('request', (request, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(
//     JSON.stringify({
//       data: 'Hello World!',
//     }),
//   );
// });

// server.listen(8000);
