module.exports = (sequelize, DataTypes) => {
  const SistersInfo = sequelize.define("sistersInfo", {
    sName: {
      type: DataTypes.STRING,
    },
    sOccupation: {
      type: DataTypes.STRING,
    },
    sCompany: {
      type: DataTypes.STRING,
    },
  });
  return SistersInfo;
};
