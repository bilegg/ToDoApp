module.exports = (sequelize, DataTypes) =>
  sequelize.define("Task", {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  });
