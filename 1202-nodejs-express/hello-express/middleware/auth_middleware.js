const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const cookies = req.cookies;
  const token = cookies.web3;

  if (token) {
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = payload.sub;
      next();
    } catch (error) {
      return res.sendStatus(401);
    }
  }
};

module.exports = authMiddleware;
