verifyAdmin = (req, res, next) => {
  const user = req.user;
  if (user && user.role === 'admin') return next();
  return res.status(403).json({ message: 'Only admin can perform this action' });
};

module.exports = {
  verifyAdmin
};