const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "909967521844-aeudc5tp7rjm58gr4sfjikmt8sf12etk.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/auth/google/callback",
            profileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
        },
        (accessToken, refreshToken, profile, done) => {
            console.log("Passport Callback Function Started");
            console.log(profile.name);

            return done(null, "/webpages/CurrentProjects/currentProjects.html");
        }
    )
);

passport.serializeUser(function (profile, done) {
    done(null, profile);
});

passport.deserializeUser(function (obj, done) {
    done(null, obj);
});

module.exports = passport;
