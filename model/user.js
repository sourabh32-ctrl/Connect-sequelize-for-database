import { Sequelize } from "sequelize";

export const userModel = (sequelize) => {

    const {DataTypes} = Sequelize;

    const User = sequelize.define('User', {
        firstName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'John',
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'Doe'
    }
    });

}
