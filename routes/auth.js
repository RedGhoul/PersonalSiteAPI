const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authsystem");

// register
router.post(
  "/register",
  // middleware that handles the registration process
  authMiddleware.register,
  // json handler
  authMiddleware.signJWTForUser
);

// Sign in
router.post(
  "/signin",
  // middleware that handles the sign in process
  authMiddleware.signIn,
  // // json handler
  authMiddleware.signJWTForUser
);

module.exports = router;
