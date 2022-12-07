module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    password: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    mobileNumber: {
      type: DataTypes.STRING,
    },
  });
  return User;
};
