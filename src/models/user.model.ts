import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import bcrypt from 'bcrypt'
import sequelize from '../config/database'

class UserModel extends Model<
  InferAttributes<UserModel>,
  InferCreationAttributes<UserModel>
> {
  declare id: CreationOptional<number>
  declare name: string
  declare email: string
  declare password: string
  declare age: number
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // get() {
      //   const upperCaseName = this.getDataValue('name').toUpperCase()
      //   return upperCaseName
      // }
    },
    password: {
      type: DataTypes.STRING(80),
      async set(this, value) {
        const passwordSalt = process.env.PASSWORD_SALT
        let hashedPassword = ''

        if (typeof value === 'string' && passwordSalt) {
          hashedPassword = await bcrypt.hash(value, 10)
          this.setDataValue('password', hashedPassword)
        }
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
    },
  },
  { sequelize, modelName: 'User' }
)

// UserModel.sync({ force: true })

export default UserModel
