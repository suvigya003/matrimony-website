module.exports = (sequelize, DataTypes) => {
  const AstroInfo = sequelize.define("astroInfo", {
    rashi: {
      type: DataTypes.STRING,
    },
    nakshatra: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.STRING,
    },
    birthTime: {
      type: DataTypes.STRING,
    },
  });
  return AstroInfo;
};
