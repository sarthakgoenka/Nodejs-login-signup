const models = require("../database/models");

const { User } = models;

async function getByEmail(email, options = {}) {
  const result = await User.findOne({
    where: { email },
  });

  const { plain } = options;
  return plain === true ? result.get({ plain }) : result;
}

async function getById(id, options = {}) {
  const result = await User.findByPk(id);

  if (result && options && options.plain === true) {
    const data = result.get({ plain: true });

    delete data.password;
    return data;
  }

  return result;
}

async function createUser(data, options = {}) {
  const row = await User.create(data);
  return options.plain === true ? row.toJSON() : row;
}
module.exports = { getByEmail, getById, createUser };
