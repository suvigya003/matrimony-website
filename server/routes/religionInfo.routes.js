const express = require("express");
const router = express.Router();

const {
  createReligionInfo,
  updateReligionInfo,
} = require("../controllers/user/religionInfo/religionInfo.controller");

router.post("/createReligionInfo", createReligionInfo);
router.put("/updateReligionInfo", updateReligionInfo);

module.exports = router;
