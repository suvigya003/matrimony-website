module.exports = (sequelize, DataTypes) => {
  const NotificationAndSMS = sequelize.define("notificationAndSMS", {
    userId: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    message: {
      type: DataTypes.STRING,
    },
    date: {
      type: DataTypes.STRING,
    },
  });
  return NotificationAndSMS;
};
