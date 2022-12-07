module.exports = (sequelize, DataTypes) => {
  const ReligionInfo = sequelize.define("religionInfo", {
    religion: {
      type: DataTypes.STRING,
    },
    caste: {
      type: DataTypes.STRING,
    },
    subCaste: {
      type: DataTypes.STRING,
    },
  });
  return ReligionInfo;
};
