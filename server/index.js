require("dotenv").config();
const express = require("express");
const cors = require("cors");

const approvalStatusInfoRoutes = require("./routes/approvalStatusInfo.routes");
const astroInfoRoutes = require("./routes/astroInfo.routes");
const authRoutes = require("./routes/auth.routes");
const currentPackageInfoRoutes = require("./routes/currentPackageInfo.routes");
const educationalInfoRoutes = require("./routes/educationalInfo.routes");
const familyInfoRoutes = require("./routes/familyInfo.routes");
const personalInfoRoutes = require("./routes/personalInfo.routes");
const preferencesRoutes = require("./routes/preferences.routes");
const professionalInfoRoutes = require("./routes/professionalInfo.routes");
const religionInfoRoutes = require("./routes/religionInfo.routes");

const app = express();

var corsOptions = {
  origin: "*",
};

const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Database is synced");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Server is up and running" });
});

app.use("/approvalStatusInfo", approvalStatusInfoRoutes);
app.use("/auth", authRoutes);
app.use("/astroInfo", astroInfoRoutes);
app.use("/currentPackageInfo", currentPackageInfoRoutes);
app.use("/educationalInfo", educationalInfoRoutes);
app.use("/familyInfo", familyInfoRoutes);
app.use("/personalInfo", personalInfoRoutes);
app.use("/preferences", preferencesRoutes);
app.use("/professionalInfo", professionalInfoRoutes);
app.use("/religionInfo", religionInfoRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
