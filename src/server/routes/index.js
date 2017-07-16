import { Router } from 'express'

import generalRoute from './general'
import driversRoute from './drivers'

const routes = Router()

routes.use('/general', generalRoute)
routes.use('/drivers', driversRoute)

export default routes
