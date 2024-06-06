const adminMiddleware = (req, res, next) => {
  try {
    if (req.user.role === "admin") return next();
    return res.status(401).send("Unauthorized");
  } catch (e) {
    console.log("Internal server error: ", e);
    return res.status(500).send("Internal server error.");
  }
};

module.exports = adminMiddleware;
