const http = require("http");
const { getEmployeeData, postEmployeeData } = require("./employeeData.js");
const port = 4000;

http
  .createServer((req, res) => {
    switch (req.url) {
      case "/employee":
        if (req.method === "GET") {
          getEmployeeData(req, res);
        } else if (req.method === "POST") {
          postEmployeeData(req, res);
        }
        break;
      case "/home":
        res.write("This is Home page");
        res.end();
        break;
      case "/about":
        res.write("This is About page");
        res.end();
        break;

      default:
        res.write("No page found");
        res.end();
        break;
    }
  })
  .listen(port, () => {
    console.log(`server is running in port ${port}`);
  });
