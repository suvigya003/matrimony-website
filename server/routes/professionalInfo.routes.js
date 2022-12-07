const express = require("express");
const router = express.Router();

const {
  createProfessionalInfo,
  updateProfessionalInfo,
} = require("../controllers/user/professionalInfo/professionalInfo.controller");

router.post("/createProfessionalInfo", createProfessionalInfo);
router.put("/updateProfessionalInfo", updateProfessionalInfo);

module.exports = router;
