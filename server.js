const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.method);
  // console.log(req);

  // const { headers, url, method } = req;
  // console.log(headers, url, method);
  // res.setHeader("Content-Type", "text/plain");

  // res.statusCode = 404;
  // res.setHeader("Content-Type", "application/json");
  // res.setHeader("X-Powered-By", "Node.js");
  // res.write("hello");  or

  // res.writeHead(404, {
  //   "Content-Type": "application/json",
  //   "X-Powered-By": "Node.js",
  // });

  res.writeHead(400, {
    "Content-Type": "application/json",
    "X-Powered-By": "Node.js",
  });
  res.end(
    JSON.stringify({
      success: false,
      error: "please add email",
      data: null,
    })
  );
});

const PORT = 5000;
server.listen(PORT, () => console.log(`server running on port ${PORT}`));

server.on("error", (error) => {
  console.error("Server error:", error);
});
