const express = require("express");
const router = express.Router();

const {
  createAstroInfo,
  updateAstroInfo,
} = require("../controllers/user/astroInfo/astroInfo.controller");

router.post("/createAstroInfo", createAstroInfo);
router.put("/updateAstroInfo", updateAstroInfo);

module.exports = router;
