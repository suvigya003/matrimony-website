module.exports = (sequelize, DataTypes) => {
  const BrothersInfo = sequelize.define("brothersInfo", {
    bName: {
      type: DataTypes.STRING,
    },
    bOccupation: {
      type: DataTypes.STRING,
    },
    bCompany: {
      type: DataTypes.STRING,
    },
  });
  return BrothersInfo;
};
