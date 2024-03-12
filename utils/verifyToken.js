import jwt from "jsonwebtoken";
const createError = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return next(createError(401, "You are not authenticated!"));
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) return next(createError(403, "Token is not valid!"));
    req.user = decoded; // Store the decoded token payload in req.user
      
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log("req.user.id:", req.user.id);
    console.log("req.params.id:", req.params.id);
    
    if (req.user && (req.user.id === req.params.id || req.user.isAdmin)) {
      next();
    } else {
      return next(createError(403, "You are not authorized! This error is from verifyUser"));
    }
  });
};



export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user && req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized! This error is from verifyAdmin"));
    }
  });
};
