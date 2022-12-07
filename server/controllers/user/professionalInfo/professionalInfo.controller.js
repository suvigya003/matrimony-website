const jwt = require("jsonwebtoken");

const db = require("../../../models");
const ProfessionalInfo = db.professionalInfo;

exports.createProfessionalInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    // db.seq
    //   .query(`SELECT * FROM users WHERE users.email = ${userEmail}`)
    //   .success(async function () {

    //   });

    await ProfessionalInfo.create({
      ...req.body,
      userId: id,
    });
    res.send({ message: "Professional info of the user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.updateProfessionalInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);

    await ProfessionalInfo.update(req.body, {
      where: {
        userId: id,
      },
    });
    res.send({ message: "Professional info of the user updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
