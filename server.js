const http = require("http");
const { mainRoute } = require("./lib/mainRoute");

const server = http.createServer((req, res) => {
  mainRoute(req.url, req.method, function (err, data) {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }
    var response = data;
    const { status, contentType, responseData } = response;
    res.writeHead(status, { "content-type": contentType });
    res.end(responseData);
  });
});
server.listen(3000, () => {
  console.log("The server is running in the port 3000");
});
