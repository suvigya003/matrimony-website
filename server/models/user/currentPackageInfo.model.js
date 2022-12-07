module.exports = (sequelize, DataTypes) => {
  const CurrentPackageInfo = sequelize.define("currentPackageInfo", {
    packageName: {
      type: DataTypes.STRING,
    },
  });
  return CurrentPackageInfo;
};
