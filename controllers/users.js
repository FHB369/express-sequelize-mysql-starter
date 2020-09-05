const User = require("../models").User;
const bcrypt = require("bcryptjs");

module.exports = {
  async create(req, res) {
    return User.create({
      name: req.body.name,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 8),
    })
      .then((user) => res.status(200).send(user))
      .catch((error) => res.status(400).send(error));
  },
  list(req, res) {
    return User.findAll()
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },
};
