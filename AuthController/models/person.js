module.exports = function(sequelize, DataTypes){
    return sequelize.define('person', {

      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
}
  
