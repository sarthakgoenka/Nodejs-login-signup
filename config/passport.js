const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { getByEmail, getById, createUser } = require("../services/user.service");
function initialize(passport) {
  const authenticateUser = async (email, password, done) => {
    const user = await getByEmail(email);
    if (user == null) {
      return done(null, false, { message: "No user with that email 🤯" });
    }
    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect 😏" });
      }
    } catch (e) {
      return done(e);
    }
  };
  const registerUser = async (req, email, password, done) => {
    const { firstName, lastName } = req.body;
    const user = await getByEmail(email);
    if (user) {
      return done(null, false, {
        message: "User with that mail already exists 😢",
      });
    }
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await createUser({
        firstName,
        lastName,
        email,
        password: hashedPassword,
      });
      return done(null, newUser);
    } catch (e) {
      return done(e);
    }
  };

  passport.use(
    "local-login",
    new LocalStrategy({ usernameField: "email" }, authenticateUser)
  );
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passReqToCallback: true,
      },
      registerUser
    )
  );
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id, done) => {
    const user = await getById(id);
    return done(null, user);
  });
}

module.exports = initialize;
