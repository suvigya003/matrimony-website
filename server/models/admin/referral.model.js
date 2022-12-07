module.exports = (sequelize, DataTypes) => {
  const Referral = sequelize.define("referral", {
    userId: {
      type: DataTypes.STRING,
    },
    spotlightDays: {
      type: DataTypes.STRING,
    },
    referralCount: {
      type: DataTypes.STRING,
    },
  });
  return Referral;
};
