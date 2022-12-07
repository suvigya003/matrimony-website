module.exports = (sequelize, DataTypes) => {
  const HappyStories = sequelize.define("happyStories", {
    userId1: {
      type: DataTypes.STRING,
    },
    userId2: {
      type: DataTypes.STRING,
    },
    story: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
  return HappyStories;
};
