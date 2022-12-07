const express = require("express");
const router = express.Router();

const {
  getApprovalStatusInfo,
} = require("../controllers/user/approvalStatusInfo/approvalStatusInfo.controller");

router.get("/approvalStatus", getApprovalStatusInfo);

module.exports = router;
