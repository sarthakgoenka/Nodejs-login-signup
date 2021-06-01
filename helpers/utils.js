function env(key, defaultValue = null) {
  const value = process.env[key];

  if (value === "true") return true;
  if (value === "false") return false;
  return value || defaultValue;
}

module.exports = env;
