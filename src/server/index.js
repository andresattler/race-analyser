import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import { WEB_PORT } from '../shared/config'
import routes from './routes'
import renderApp from './render-app'

mongoose.connect('mongodb://127.0.0.1:27017/races')

const app = express()

app.use(bodyParser.json())
app.use('/api', routes)

app.get('/', (req, res) => {
  res.send(renderApp())
})

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server running on port ${WEB_PORT}`)
})
