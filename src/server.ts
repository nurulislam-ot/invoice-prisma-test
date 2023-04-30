import express from 'express'
require('express-async-errors')
import * as dotenv from 'dotenv'
dotenv.config()

// base router
import versionOneRoute from './routes/base.route'

// middleware's
import errorMiddleWare from './middleware/error.middleware'
import notFoundMiddleWare from './middleware/notFound.middleware'

// database
// import sequelize from './config/database'
// import CountryModel from './models/country.model'
// import CapitalModel from './models/capital.model'

process.addListener('uncaughtException', (error) => {
  console.log(error.message)
})

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1', versionOneRoute)
app.use(notFoundMiddleWare)
app.use(errorMiddleWare)

app.listen(2023, async () => {
  try {
    console.log('Server is running on port: 2023')
    // await sequelize.authenticate()
    // console.log('Database connected.')
  } catch (error) {
    console.log(error)
  }
})
