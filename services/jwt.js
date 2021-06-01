const jwt = require("jsonwebtoken");
const env = require("../helpers/utils");

function sign(payload) {
  const privateKey = env("APP_PKEY", "secret");
  const options = {
    expiresIn: "12h",
  };

  return jwt.sign({ user: payload }, privateKey, options);
}

function verify(token) {
  const privateKey = env("APP_PKEY", "secret");
  const options = {
    expiresIn: "12h",
  };

  try {
    return jwt.verify(token, privateKey, options);
  } catch (err) {
    return false;
  }
}

export { sign, verify };
