const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const register = require("../../../middleware/register");
const login = require("../../../middleware/login");

const db = require("../../../models");
const User = db.user;

const SALT = 10;

exports.register = async (req, res) => {
  try {
    console.log(req.body);
    const { error } = register.isValidRegistration(req.body);
    if (error) {
      console.log(error);
      return res.status(400).send(error.details[0].message);
    }
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      return res.status(400).send({ message: "User already registered" });
    }
    const salt = await bcrypt.genSalt(SALT);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await User.create({
      ...req.body,
      password: hashedPassword,
    });
    res.send({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.login = async (req, res) => {
  try {
    const { error } = login.isValidLogin(req.body);
    if (error) {
      console.log(error);
      return res.status(400).send(error.details[0].message);
    }
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      return res.status(400).send("Invalid email or password");
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send({ message: "Invalid email or password" });
    } else {
      const token = jwt.sign(
        { email: user.email, id: user.id },
        process.env.JWT_SECRET_KEY
      );

      res.send({
        message: "User logged in successfully",
        token: token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

exports.getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findOne({
      where: {
        id: id,
      },
    });
    res.send(user);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
