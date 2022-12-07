const express = require("express");
const router = express.Router();

const {
  createEducationalInfo,
  updateEducationalInfo,
} = require("../controllers/user/educationalInfo/educationalInfo.controller");

router.post("/createEducationalInfo", createEducationalInfo);
router.put("/updateEducationalInfo", updateEducationalInfo);

module.exports = router;
