module.exports = (sequelize, DataTypes) => {
  const PersonalInfo = sequelize.define("personalInfo", {
    firstName: {
      type: DataTypes.STRING,
    },
    middleName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    height: {
      type: DataTypes.STRING,
    },
    maritalStatus: {
      type: DataTypes.STRING,
    },
    bloodGroup: {
      type: DataTypes.STRING,
    },
    dob: {
      type: DataTypes.STRING,
    },
    smoking: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    pin: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
  });
  return PersonalInfo;
};
