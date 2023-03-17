const express = require("express");
const middleWareAuth = require("./AddMiddleware");
const getEmployee = require("./handleRequests");
const app = express();
const port = 30000;

app.get("/employees", middleWareAuth(), getEmployee());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
