import { Router } from 'express'
import folderRouter from './folder.route'
import productRoute from './product.route'
import clientRoute from './client.route'
import itemRoute from './item.route'
import invoiceRoute from './invoice.route'

const versionOneRoute = Router()

versionOneRoute.use('/folder', folderRouter)
// versionOneRoute.use('/user', userRouter)
versionOneRoute.use('/product', productRoute)
versionOneRoute.use('/client', clientRoute)
versionOneRoute.use('/item', itemRoute)
versionOneRoute.use('/invoice', invoiceRoute)

export default versionOneRoute
