const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy({
    clientID: "909967521844-aeudc5tp7rjm58gr4sfjikmt8sf12etk.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    profileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    passReqToCallback: true
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('Passport Callback Function Started');
    console.log(profile);
    
  return cb(null, profile);
  }

));

passport.serializeUser(function(user, done)  {
 done(null, user);
  });
  
passport.deserializeUser(function(obj, done) {
  done(null, obj);
  });
