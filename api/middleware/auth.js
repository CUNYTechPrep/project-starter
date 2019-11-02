const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
  //Get token from header
  const token = req.header("x-auth-token");

  //Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  try {
    //verify gets gets the payload passed in jwt.sign
    const decode = jwt.verify(token, process.env.secret);

    req.user = decode.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
