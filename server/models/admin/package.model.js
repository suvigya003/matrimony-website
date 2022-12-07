module.exports = (sequelize, DataTypes) => {
  const Package = sequelize.define("package", {
    name: {
      type: DataTypes.STRING,
    },
    monthlyDiscount: {
      type: DataTypes.STRING,
    },
    annualDiscount: {
      type: DataTypes.STRING,
    },
    monthlyPrice: {
      type: DataTypes.STRING,
    },
    annualPrice: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
  return Package;
};
