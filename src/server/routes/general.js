import mongoose from 'mongoose'

import { Race, Driver } from '../model'

mongoose.Promise = global.Promise

const count = key => val => Race.count({ [key]: val })

const general = async (req, res) => {
  const countStatus = count('status')
  const data = {}
  data.status = await Promise.all([
    countStatus('finished'),
    countStatus('declined'),
    countStatus('retired'),
  ])
  const countWeather = count('weather')
  data.weather = await Promise.all([
    countWeather('sunny'),
    countWeather('rainy'),
    countWeather('snowy'),
    countWeather('thundery'),
  ])
  data.numberOfDrivers = await Driver.count()
  data.numberOfRaces = await Race.count()
  data.numberOfTracks = await Race.distinct('track_id').count()
  res.send(data)
}

export default general
