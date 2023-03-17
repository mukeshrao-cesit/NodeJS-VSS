const middleWareAuth = (req, res) => {
  if (req.qurey.id !== 1) {
    next();
  }
};

exports.module = middleWareAuth;
