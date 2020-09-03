const passport = require("passport");
const JWT = require("jsonwebtoken");
const PassportJwt = require("passport-jwt");
const User = require("../models/user");

require("dotenv").load();

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

function register(req, res, next) {
  const user = new User({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.email
  });

  User.register(user, req.body.password, (error, user) => {
    if (error) {
      return res.json({
        error
      });
    }
    req.user = user; // need this for the signJWTForUser to work
    next();
  });
}

passport.use(
  new PassportJwt.Strategy(
    // Options
    {
      jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWTSECRET,
      algorithms: [process.env.JWTALGO]
    },

    (payload, done) => {
      User.findById(payload.sub)
        .then(user => {
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        })
        .catch(error => {
          done(error, false);
        });
    }
  )
);

function signJWTForUser(req, res) {
  const user = req.user;
  const token = JWT.sign(
    {
      email: user.email
    },
    process.env.JWTSECRET,
    {
      algorithm: process.env.JWTALGO,
      expiresIn: process.env.JWTEXPIRESIN,
      subject: user._id.toString()
    }
  );
  res.json({
    token
  });
}

module.exports = {
  initialize: passport.initialize(),
  register,
  signIn: passport.authenticate("local", {
    session: false
  }),
  requireJWT: passport.authenticate("jwt", {
    session: false
  }),
  signJWTForUser
};
