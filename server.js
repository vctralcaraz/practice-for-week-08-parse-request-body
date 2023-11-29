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
});

const port = 5000;

server.listen(port, () => {
  console.log('Successfully started the server on port', port);
})

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };