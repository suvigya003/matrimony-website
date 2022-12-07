module.exports = (sequelize, DataTypes) => {
  const Preference = sequelize.define("preference", {
    maritalStatus: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    weight: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.STRING,
    },
    religion: {
      type: DataTypes.STRING,
    },
    caste: {
      type: DataTypes.STRING,
    },
    subCaste: {
      type: DataTypes.STRING,
    },
    education: {
      type: DataTypes.STRING,
    },
    employedIn: {
      type: DataTypes.STRING,
    },
  });
  return Preference;
};
