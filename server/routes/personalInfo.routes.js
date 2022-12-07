const express = require("express");
const router = express.Router();

const {
  createPersonalInfo,
  updatePersonalInfo,
} = require("../controllers/user/personalInfo/personalInfo.controller");

router.post("/createPersonalInfo", createPersonalInfo);
router.put("/updatePersonalInfo", updatePersonalInfo);

module.exports = router;
