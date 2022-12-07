module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("admin", {
    adminId: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  });
  return Admin;
};
