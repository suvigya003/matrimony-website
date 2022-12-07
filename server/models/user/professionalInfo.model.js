module.exports = (sequelize, DataTypes) => {
  const ProfessionalInfo = sequelize.define("professionalInfo", {
    employedIn: {
      type: DataTypes.STRING,
    },
    organisationName: {
      type: DataTypes.STRING,
    },
    annualIncome: {
      type: DataTypes.STRING,
    },
    country: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
  });
  return ProfessionalInfo;
};
