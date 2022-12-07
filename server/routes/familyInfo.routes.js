const express = require("express");
const router = express.Router();

const {
  createFamilyInfo,
  updateFamilyInfo,
} = require("../controllers/user/familyInfo/familyInfo.controller");

router.post("/createFamilyInfo", createFamilyInfo);
router.put("/updateFamilyInfo", updateFamilyInfo);

module.exports = router;
