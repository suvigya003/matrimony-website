const jwt = require("jsonwebtoken");

const db = require("../../../models");
const PackageInfo = db.package;
const CurrentPackageInfo = db.currentPackageInfo;

exports.createPackageInfo = async (req, res) => {
  try {
    console.log(req.body);

    // db.seq
    //   .query(`SELECT * FROM users WHERE users.email = ${userEmail}`)
    //   .success(async function () {

    //   });

    await PackageInfo.create({
      ...req.body,
    });
    res.send({ message: "Package added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.updatePackageInfo = async (req, res) => {
  try {
    console.log(req.body);

    await PackageInfo.update({ ...req.body });
    res.send({ message: "Package updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.deletePackageInfo = async (req, res) => {
  try {
    console.log(req.body);
    const id = req.params.id;

    await PackageInfo.delete({
      where: {
        id: id,
      },
    });
    res.send({ message: "Package deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
