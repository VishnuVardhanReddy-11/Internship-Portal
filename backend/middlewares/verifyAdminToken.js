const jwt = require("jsonwebtoken");

const verifyAdminToken = (req, res, next) => {
  const token = req.cookies.adminToken; // 🧑‍💼 admin cookie

  if (!token) return res.status(401).json({ message: "Unauthorized. No token." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token." });
  }
};

module.exports = {
  verifyAdminToken
};
