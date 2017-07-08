
import csv from 'csvtojson'
import fs from 'fs'
import mongoose from 'mongoose'

import Race from './server/model'

mongoose.connect('mongodb://127.0.0.1:27017/races', (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('db connection failed', err)
  }
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
      oponent: data.oponent,
      money: data.money,
      fuel_consumption: data.fuel_consumption,
      winner: data.winner,
      status: data.status,
      forecast: data.forecast,
      weather: data.weather,
    })
    race.save()
  })
  .on('end', () => {
    // eslint-disable-next-line no-console
    console.log('done')
  })

stream.pipe(csvStream)
