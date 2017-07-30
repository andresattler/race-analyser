import { Router } from 'express'

import generalRoute from './general'
import driversRoute from './drivers'
import racesRoute from './races'

const routes = Router()

routes.use('/general', generalRoute)
routes.use('/drivers', driversRoute)
routes.use('/races', racesRoute)

export default routes
