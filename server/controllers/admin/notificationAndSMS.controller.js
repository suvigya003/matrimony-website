const jwt = require("jsonwebtoken");

const db = require("../../../models");
const NotificationAndSMSInfo = db.notificationAndSMS;

exports.createNotificationAndSMSInfo = async (req, res) => {
  try {
    console.log(req.body);

    // db.seq
    //   .query(`SELECT * FROM users WHERE users.email = ${userEmail}`)
    //   .success(async function () {

    //   });

    await NotificationAndSMSInfo.create({
      ...req.body,
    });
    res.send({ message: "Notification / SMS added successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
