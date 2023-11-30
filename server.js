const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require('http');

server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  console.log(method, url);

  let reqBody = '';

  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => {
    if(reqBody.length > 0) {
      req.body = parseBody(reqBody);
    }

    sendFormPage(req, res);
  });
});

const port = 5000;

server.listen(port, () => {
  console.log('Successfully started the server on port', port);
})

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };