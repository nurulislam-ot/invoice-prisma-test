import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import sequelize from '../config/database'

class CapitalModel extends Model<
  InferAttributes<CapitalModel>,
  InferCreationAttributes<CapitalModel>
> {
  declare name: string
}

CapitalModel.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, tableName: 'Capital', timestamps: false }
)

export default CapitalModel
