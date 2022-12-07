const express = require("express");
const router = express.Router();

const {
  createPreferences,
  updatePreferences,
} = require("../controllers/user/preferences/preferences.controller");

router.post("/createPreferences", createPreferences);
router.put("/updatePreferences", updatePreferences);

module.exports = router;
