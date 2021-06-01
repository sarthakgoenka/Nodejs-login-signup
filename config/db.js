const env = require("../helpers/utils");
const environment = env("NODE_ENV", "development");
const databaseURL = env("DATABASE_URL");

const dbOptions = (dbURL) => {
  const options = {
    use_env_variable: "DATABASE_URL",
    dialectOptions: {
      ssl: env("DB_SSL", false),
    },
  };
  return dbURL ? options : {};
};

module.exports = {
  [environment]: {
    username: env("DB_USERNAME", "root"),
    password: env("DB_PASSWORD", null),
    database: env("DB_DATABASE", "gourmetgarden"),
    host: env("DB_HOST", "127.0.0.1"),
    dialect: env("DB_CONNECTION", "mysql"),
    logging: env("DB_LOGGING", false),
    ...dbOptions(databaseURL),
  },

  dbOptions,
};
