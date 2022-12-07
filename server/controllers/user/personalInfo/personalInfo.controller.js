const jwt = require("jsonwebtoken");

const db = require("../../../models");
const PersonalInfo = db.personalInfo;

exports.createPersonalInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    await PersonalInfo.create({
      ...req.body,
      userId: id,
    });
    res.send({ message: "Personal info of the user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.updatePersonalInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    await PersonalInfo.update(req.body, {
      where: {
        userId: id,
      },
    });
    res.send({ message: "Personal info of the user updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
