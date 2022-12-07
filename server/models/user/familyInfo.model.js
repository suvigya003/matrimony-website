module.exports = (sequelize, DataTypes) => {
  const FamilyInfo = sequelize.define("familyInfo", {
    familyType: {
      type: DataTypes.STRING,
    },
    fName: {
      type: DataTypes.STRING,
    },
    fOccupation: {
      type: DataTypes.STRING,
    },
    fCompany: {
      type: DataTypes.STRING,
    },
    mName: {
      type: DataTypes.STRING,
    },
    mOccupation: {
      type: DataTypes.STRING,
    },
    mCompany: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    contactNumber1: {
      type: DataTypes.STRING,
    },
    contactNumber2: {
      type: DataTypes.STRING,
    },
  });
  return FamilyInfo;
};
