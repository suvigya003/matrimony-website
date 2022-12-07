const jwt = require("jsonwebtoken");

const db = require("../../../models");
const AstroInfo = db.astroInfo;

exports.createAstroInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    // db.seq
    //   .query(`SELECT * FROM users WHERE users.email = ${userEmail}`)
    //   .success(async function () {

    //   });

    await AstroInfo.create({
      ...req.body,
      userId: id,
    });
    res.send({ message: "Astro info of the user added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.updateAstroInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    await AstroInfo.update(req.body, {
      where: {
        userId: id,
      },
    });
    res.send({ message: "Astro info of the user updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
