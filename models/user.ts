import { BuildOptions, Model, Sequelize, DataTypes } from 'sequelize';
import { UserModel } from './user';

export interface UserModel extends Model<UserModel> {
  firstName: string;
  lastName: string;
  email: string;
}


export type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): UserModel;
}

const User = (sequelize: Sequelize, dataTypes: typeof DataTypes) => {
  return sequelize.define('User', {
    firstName: dataTypes.STRING,
    lastName: dataTypes.STRING,
    email: dataTypes.STRING
  }, {
    tableName: 'users',
  });
};

export default User;
