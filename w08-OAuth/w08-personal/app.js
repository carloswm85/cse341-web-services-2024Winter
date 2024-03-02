//** REQUIRES --------------------------------------------------------------- */

/* eslint-disable no-console */
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const connection = require('./db/connect');
const routes = require('./routes');

var passport = require('passport');
var session = require('express-session');
var GitHubStrategy = require('passport-github2').Strategy;

// const swaggerUi = require('swagger-ui-express');
// const swaggerFile = require('./swagger-output.json');

//** CONSTANTS -------------------------------------------------------------- */

const PORT = process.env.PORT || 8080;
// const USERNAME = process.env.USER_NAME;
// const PASS = process.env.USER_PASSWORD;
// const URL = process.env.CLUSTER_URL;
const ROUTE = process.env.ROUTE;
const SUBROUTE = process.env.SUBROUTE;
const RENDER = process.env.RENDER_URI;

const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

//** METHODS ---------------------------------------------------------------- */

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete GitHub profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

//** MIDDLEWARES ------------------------------------------------------------ */

// Use the GitHubStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and GitHub
//   profile), and invoke a callback with a user object.
passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/github-oauth-callback'
    },
    function (accessToken, refreshToken, profile, done) {
      // asynchronous verification, for effect...
      process.nextTick(function () {
        return done(null, profile);
      });
    }
  )
);

const app = express();

// Use static files
app.use(express.static('./static'));

app.use(bodyParser.json());
// .use(cors())
app.use((req, res, next) => {
  // https://www.youtube.com/watch?v=fLv6KkCOZ3o
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    // "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
    'Content-Type'
  );
  // res.setHeader("Content-Type", "application/json");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});
app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(`/`, routes);

connection.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(PORT);
    console.log(`Connected to DB and listening on ${PORT}`);
    console.log(`http://localhost:${PORT}/${ROUTE}/${SUBROUTE}/list`);
    console.log(`API documentation - local: http://localhost:${PORT}/api-docs`);
    console.log(`API documentation - Render: ${RENDER}/api-docs`);
  }
});
