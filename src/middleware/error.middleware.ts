import { ErrorRequestHandler } from 'express'
import { Error as SequelizeError } from 'sequelize'
const errorMiddleWare: ErrorRequestHandler = (err, req, res, next) => {
  console.log(err.message)
  if (err instanceof SequelizeError) {
    return res.status(500).json({
      error: {
        message: err.message,
        stack: err.stack,
      },
    })
  }

  if (err instanceof Error) {
    return res.status(500).json({
      error: {
        message: err.message,
        stack: err.stack,
      },
    })
  }

  return res.status(500).json({
    error: {
      message: err.message,
      stack: err.stack,
    },
  })
}

export default errorMiddleWare
