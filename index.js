import fs from 'node:fs';
// Make HTTP request to the server at URL  https://memegen-link-examples-upleveled.netlify.app/
import http from 'http';
import https from 'https';
import fetch from 'node-fetch';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

// HTTPS approach

https.get(url, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    console.log('chunk:', String(chunk));
    data += chunk;
  });
  resp.on('end', () => {
    fs.writeFile('./test.txt', data, (err) => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
      }
    });
  });
});

// Node-fetch module approach

// const response = await fetch('url');
// const body = await response.text();

// console.log(body);

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
