module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define("member", {
    name: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    approvalStatus: {
      type: DataTypes.STRING,
    },
    memberID: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
  return Member;
};
