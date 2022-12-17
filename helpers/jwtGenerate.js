const jwt = require("jsonwebtoken");
module.exports = function jwtGenerator(userId) {
  return jwt.sign(userId, process.env.JWT_KEY, {
    expiresIn: "5d",
  });
};
