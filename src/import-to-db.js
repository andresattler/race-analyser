
import csv from 'csvtojson'
import fs from 'fs'
import mongoose from 'mongoose'

import { Race, Driver } from './server/model'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/races', {
  useMongoClient: true,
})

const optimizeDrivers = () =>
  Promise.all([
    Race.find().distinct('challenger'),
    Race.find().distinct('opponent'),
  ])
    .then((data) => {
      const drivers =
        data[0].concat(data[1])
        .sort((a, b) => a - b)
        .filter((val, i, arr) => val !== arr[i + 1])
      return Promise.all(drivers.map((val) => {
        const driver = new Driver({
          _id: val,
        })
        return driver.save()
      }))
    })

const stream = fs.createReadStream('./races.csv')

const csvStream = csv({
  delimiter: ';',
})
  .on('json', (data) => {
    const race = new Race({
      _id: data.id,
      race_created: data.race_created,
      race_driven: data.race_driven,
      track_id: data.track_id,
      challenger: data.challenger,
      opponent: data.opponent,
      money: data.money,
      fuel_consumption: data.fuel_consumption,
      winner: data.winner,
      status: data.status,
      forecast: data.forecast,
      weather: data.weather,
    })
    race.save().catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err.message)
    })
  })
  .on('end', () => {
    // eslint-disable-next-line no-console
    console.log('saved data to db')
    // eslint-disable-next-line no-console
    console.log('optimizing...')
    optimizeDrivers()
      .then(() => {
        process.exit(0)
      })
  })

stream.pipe(csvStream)
