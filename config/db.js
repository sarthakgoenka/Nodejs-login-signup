const env = require("../helpers/utils");
const environment = env("NODE_ENV", "development");
module.exports = {
  [environment]: {
    username: env("DB_USERNAME", "root"),
    password: env("DB_PASSWORD", null),
    database: env("DB_DATABASE", "paytm"),
    host: env("DB_HOST", "127.0.0.1"),
    dialect: env("DB_CONNECTION", "mysql"),
    logging: env("DB_LOGGING", false),
  },
};
