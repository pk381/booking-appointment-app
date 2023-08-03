const path = require("path");
const rootDir = require("../util/path");

const User = require("../models/user");

exports.getIndex = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "index.html"));
};

exports.postAddUser = async (req, res, next) => {
  const email = req.body.email;
  const phone = req.body.phone;
  const name = req.body.name;

  console.log("reqbody ", req.body);

  try {
    const user = await User.create({
      email: email,
      phone: phone,
      name: name
    });

    res.status(201).json({ user: user });
  } catch(err) {
    console.log(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.status(201).json({ users: users });
  } catch {
    // res.redirect('/')
    console.log("err2");
  }
};

exports.deleteUser = async (req, res, next) => {

  console.log("deleting");

  try {
    const email = req.params.email;
    console.log(email);
    await User.destroy({ where: { email: email } });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

