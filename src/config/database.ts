import { Sequelize } from 'sequelize'

const postGresUri = process.env.POSTGRES_URI

if (!postGresUri) throw Error('PostGres URI Not Found!')

const sequelize = new Sequelize(postGresUri, { logging: false })
// const sequelize = new Sequelize('myfirstdb', 'nurulislam', 'password', {
//   dialect: 'postgres',
//   host: 'localhost',
// })

sequelize.sync({ alter: true, logging: false })

export default sequelize
