const ErrorHandler = require("../utilities/ErrorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal server error";

  // mongodb error
  if (err.name === "CastError") {
    const message = `Database entry with this ID not found. Invalid ${err.path}.`;
    err = new ErrorHandler(message, 400);
  }

  // duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate key ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  // invalid jwt error
  if (err.name === "JsonWebTokenError") {
    const message = `Your token is invalid!`;
    err = new ErrorHandler(message, 400);
  }

  // expired jwt error
  if (err.name === "TokenExpiredError") {
    const message = `Your token has expired!`;
    err = new ErrorHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
