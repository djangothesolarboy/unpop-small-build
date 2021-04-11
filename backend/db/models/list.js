'use strict';
module.exports = (sequelize, DataTypes) => {
  const List = sequelize.define('List', {
    listName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    listDesc: {
      type: DataTypes.TEXT,
    },
    films: {
      type: DataTypes.JSON,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' }
    }
  }, {});
  List.associate = function(models) {
    List.belongsTo(models.User, {
      foreignKey: 'userId'
    });
  };
  return List;
};