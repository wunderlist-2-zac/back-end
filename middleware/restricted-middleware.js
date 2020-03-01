const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../auth/secrets');

module.exports = (req, res, next) =>  {
  const { authorization } = req.headers;

  if(authorization) {
    jwt.verify(authorization, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ you: "can't see this" });
      } else {
        req.decodedToken = decodedToken;
        next()
      }
    });
  } else {
    res.status(400).json({ message: "No credentials detected" });
  }
};