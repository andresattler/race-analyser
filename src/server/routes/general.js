import mongoose from 'mongoose'

import { Race } from '../model'

mongoose.Promise = global.Promise

const count = key => val => Race.count({ [key]: val }).exec()

/*
Race.find({}, { track_id: 1 }).exec()x
  .then((data) => {
    console.log(data)
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err)
  })
*/
const getNumberOfDrivers = new Promise((resolve) => {
  let drivers
  Race.find().distinct('challenger').exec()
    .then((data) => {
      drivers = data
    })
    .then(() => Race.find().distinct('opponent').exec())
    .then((data) => {
      drivers.concat(data)
      drivers.sort((a, b) => a - b).filter((a, b) => a !== b)
      resolve(drivers.length)
    })
})

const general = (req, res) => {
  const countStatus = count('status')
  const data = {}
  Promise.all([
    countStatus('finished'),
    countStatus('declined'),
    countStatus('retired'),
  ]).then((values) => {
    data.status = values
  }).then(() => {
    const countWeather = count('weather')
    return Promise.all([
      countWeather('sunny'),
      countWeather('rainy'),
      countWeather('snowy'),
      countWeather('thundery'),
    ])
  })
  .then((values) => {
    data.weather = values
  })
  .then(() => getNumberOfDrivers)
  .then((numberOfDrivers) => {
    data.numberOfDrivers = numberOfDrivers
    return Race.count().exec()
  })
  .then((numberOfRaces) => {
    data.numberOfRaces = numberOfRaces
    return Race.distinct('track_id').exec()
  })
  .then((tracks) => {
    data.numberOfTracks = tracks.length
    res.send(data)
  })
}

export default general
