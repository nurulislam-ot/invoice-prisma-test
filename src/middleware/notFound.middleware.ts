import { Handler } from 'express'

const notFoundMiddleWare: Handler = (req, res, next) => {
  return res.status(404).json({
    error: {
      message: 'No route found!',
    },
  })
}

export default notFoundMiddleWare
