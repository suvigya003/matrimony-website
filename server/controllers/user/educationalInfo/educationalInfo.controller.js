const jwt = require("jsonwebtoken");

const db = require("../../../models");
const EducationalInfo = db.educationalInfo;

exports.createEducationalInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    // db.seq
    //   .query(`SELECT * FROM users WHERE users.email = ${userEmail}`)
    //   .success(async function () {

    //   });

    await EducationalInfo.create({
      ...req.body,
      userId: id,
    });
    res.send({ message: "Educational info of the user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.updateEducationalInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    await EducationalInfo.update(req.body, {
      where: {
        userId: id,
      },
    });
    res.send({ message: "Educational info of the user updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
