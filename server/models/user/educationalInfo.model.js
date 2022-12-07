module.exports = (sequelize, DataTypes) => {
  const EducationalInfo = sequelize.define("educationalInfo", {
    highestEducation: {
      type: DataTypes.STRING,
    },
    educationType: {
      type: DataTypes.STRING,
    },
  });
  return EducationalInfo;
};
