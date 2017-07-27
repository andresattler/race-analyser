
import csv from 'csvtojson'
// import fs from 'fs'
import mongoose from 'mongoose'

import { Race, Driver } from './server/model'

mongoose.Promise = global.Promise

mongoose.connect('mongodb://127.0.0.1:27017/races', {
  useMongoClient: true,
})

const optimizeDrivers = async () => {
  const drivers = {}
  const raceList = await Race.find({}).select({ challenger: 1, opponent: 1, winner: 1 })
  const challengerList = raceList.map(obj => obj.challenger)
  const opponentList = raceList.map(obj => obj.opponent)
  const winnList = raceList.map(obj => obj.winner)
  challengerList.forEach((val) => {
    if (!Object.prototype.hasOwnProperty.call(drivers, val)) {
      drivers[val] = {
        _id: val,
        races_driven: 1,
        as_challenger: 1,
        as_opponent: 0,
        winns: 0,
      }
    } else {
      drivers[val].races_driven += 1
      drivers[val].as_challenger += 1
    }
  })
  opponentList.forEach((val) => {
    if (!Object.prototype.hasOwnProperty.call(drivers, val)) {
      drivers[val] = {
        _id: val,
        races_driven: 1,
        as_opponent: 1,
        as_challenger: 0,
        winns: 0,
      }
    } else {
      drivers[val].races_driven += 1
      drivers[val].as_opponent += 1
    }
  })
  winnList.forEach((val) => {
    drivers[val].winns += 1
  })
  const driverList = Object.values(drivers)
  Driver.insertMany(driverList)
}
const arr = []
csv({ delimiter: ';' })
  .fromFile('./races.csv')
  .on('json', (data) => {
    arr.push(data)
  })
  .on('done', () => {
    const insertMany = (start = 0, end = 999) => {
      Race.insertMany(arr.slice(0, 1000), { ordered: false })
        .then(() => {
          if (arr.length + 1000 > end) {
            insertMany(start + 1000, end + 1000)
            console.log(`inserted ${end}`)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    insertMany()
  })
/*
optimizeDrivers()
  .then(() => {
  //  process.exit(0)
  })
*/
