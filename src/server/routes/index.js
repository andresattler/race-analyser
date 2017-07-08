import Router from 'express'

import Race from '../model'

const routes = Router()


/*
Race.find({}, { track_id: 1 }).exec()
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err)
  })

Race.count({ weather: 'sunny' }).exec()
  .then((data) => {
    console.log('sunny:', data)
  })
*/

routes.get('/count', (req, res) => {
  Race.count({ [req.param('key')]: req.param('val') }).exec()
    .then((number) => {
      res.send({ number })
    })
})

export default routes
