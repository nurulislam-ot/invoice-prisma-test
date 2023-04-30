import {
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize'
import sequelize from '../config/database'
import CapitalModel from './capital.model'

class CountryModel extends Model<
  InferAttributes<CountryModel>,
  InferCreationAttributes<CountryModel>
> {
  declare name: string
}

CountryModel.init(
  {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  { timestamps: false, tableName: 'tbl_country', sequelize }
)

CountryModel.hasOne(CapitalModel, {
  foreignKey: 'countryId',
})

export default CountryModel
