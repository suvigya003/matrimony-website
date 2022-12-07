const jwt = require("jsonwebtoken");

const db = require("../../../models");
const CurrentPackageInfo = db.currentPackageInfo;

exports.getCurrentPackageInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    const currentPackage = await CurrentPackageInfo.findOne({
      where: {
        userId: id,
      },
    });
    res.send({
      message: "Current Package info of the user fetched successfully",
      data: currentPackage,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
