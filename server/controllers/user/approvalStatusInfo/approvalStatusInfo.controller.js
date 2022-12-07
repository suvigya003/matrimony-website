const jwt = require("jsonwebtoken");

const db = require("../../../models");
const MemberInfo = db.member;

exports.getApprovalStatusInfo = async (req, res) => {
  try {
    const user = jwt.verify(req.headers.token, process.env.JWT_SECRET_KEY);

    console.log(req.body);
    const id = user.id;

    const memberStatus = await MemberInfo.findOne({
      where: {
        userId: id,
      },
    });
    res.send({
      message: "Approval status info of the user fetched successfully",
      data: memberStatus.approvalStatus,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
