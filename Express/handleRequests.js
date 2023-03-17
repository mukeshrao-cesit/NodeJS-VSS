const getEmployee = (req, res) => {
  res.send(`Hi ${req.query.name}`);
};

exports.module = getEmployee;
