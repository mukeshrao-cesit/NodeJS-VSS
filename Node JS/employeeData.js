let employeeData = [
  {
    _id: "5ec02a534587193b1c607e2c",
    name: {
      first: "Pace",
      last: "Simmons",
    },
    company: "MOLTONIC",
    email: "pace.simmons@moltonic.co.uk",
    phone: "+1 (941) 562-2930",
    address: "274 Dikeman Street, Somerset, Nevada, 6375",
  },
];

const getEmployeeData = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(employeeData));
  res.end();
};

const postEmployeeData = (req, res) => {
  req.on("data", (data) => {
    employeeData.push(JSON.parse(data));
  });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(employeeData));
  req.on("end", () => {
    res.end();
  });
};

module.exports = { getEmployeeData, postEmployeeData };
