import jwt from "jsonwebtoken";
import {createError} from "../error/error.js"

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401,"You need to login"));
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError(403,"Token is not valid"));
    }

    req.user = user;
    next();
  }
  );

}

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin ) {
      next();
    } else {
       return next(createError(403,"You are not allowed to do that"));
    }
  }); 
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};