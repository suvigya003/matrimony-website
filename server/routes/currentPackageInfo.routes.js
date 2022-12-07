const express = require("express");
const router = express.Router();

const {
  getCurrentPackageInfo,
} = require("../controllers/user/currentPackageInfo/currentPackageInfo.controller");

router.get("/currentPackage", getCurrentPackageInfo);

module.exports = router;
