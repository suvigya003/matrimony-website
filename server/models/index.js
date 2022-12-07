const dbConfig = require("../configs/db.config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.user,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// User
db.user = require("./user/user.model")(sequelize, DataTypes);
db.astroInfo = require("./user/astroInfo.model")(sequelize, DataTypes);
db.brothersInfo = require("./user/brothersInfo.model")(sequelize, DataTypes);
db.currentPackageInfo = require("./user/currentPackageInfo.model")(
  sequelize,
  DataTypes
);
db.educationalInfo = require("./user/educationalInfo.model")(
  sequelize,
  DataTypes
);
db.familyInfo = require("./user/familyInfo.model")(sequelize, DataTypes);
db.personalInfo = require("./user/personalInfo.model")(sequelize, DataTypes);
db.preference = require("./user/preference.model")(sequelize, DataTypes);
db.professionalInfo = require("./user/professionalInfo.model")(
  sequelize,
  DataTypes
);
db.religionInfo = require("./user/religionInfo.model")(sequelize, DataTypes);
db.sistersInfo = require("./user/sistersInfo.model")(sequelize, DataTypes);

db.user.hasOne(db.astroInfo);
db.astroInfo.belongsTo(db.user);

db.user.hasMany(db.brothersInfo);
db.brothersInfo.belongsTo(db.user);

db.user.hasMany(db.currentPackageInfo);
db.currentPackageInfo.belongsTo(db.user);

db.user.hasOne(db.educationalInfo);
db.educationalInfo.belongsTo(db.user);

db.user.hasOne(db.familyInfo);
db.familyInfo.belongsTo(db.user);

db.user.hasOne(db.personalInfo);
db.personalInfo.belongsTo(db.user);

db.user.hasOne(db.preference);
db.preference.belongsTo(db.user);

db.user.hasOne(db.professionalInfo);
db.professionalInfo.belongsTo(db.user);

db.user.hasOne(db.religionInfo);
db.religionInfo.belongsTo(db.user);

db.user.hasOne(db.sistersInfo);
db.sistersInfo.belongsTo(db.user);

// Admin
db.admin = require("./admin/admin.model")(sequelize, DataTypes);
db.happyStories = require("./admin/happyStories")(sequelize, DataTypes);
db.member = require("./admin/member.model")(sequelize, DataTypes);
db.notificationAndSMS = require("./admin/notificationAndSMS.model")(
  sequelize,
  DataTypes
);
db.package = require("./admin/package.model")(sequelize, DataTypes);
db.referral = require("./admin/referral.model")(sequelize, DataTypes);

db.user.hasOne(db.member);
db.member.belongsTo(db.user);

module.exports = db;
