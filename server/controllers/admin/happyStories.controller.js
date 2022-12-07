const jwt = require("jsonwebtoken");

const db = require("../../../models");
const HappyStoriesInfo = db.happyStories;

exports.createHappyStoriesInfo = async (req, res) => {
  try {
    console.log(req.body);

    // db.seq
    //   .query(`SELECT * FROM users WHERE users.email = ${userEmail}`)
    //   .success(async function () {

    //   });

    await HappyStoriesInfo.create({
      ...req.body,
    });
    res.send({ message: "Happy story added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.updateHappyStoriesInfo = async (req, res) => {
  try {
    console.log(req.body);

    await HappyStoriesInfo.update({ ...req.body });
    res.send({ message: "Happy story updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
