const http = require("http");
const { mainRoute } = require("./lib/mainRoute.js");
const server = http.createServer((req, res) => {
  mainRoute(req.url, req.method, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
      return;
    }

    const { status, contentType, responseData } = data;
    res.writeHead(status, { "Content-Type": contentType });
    res.end(responseData);
  });
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
