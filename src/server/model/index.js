import mongoose from 'mongoose'

export const Race = mongoose.model('Race', {
  _id: String,
  race_created: String,
  race_driven: String,
  track_id: Number,
  challenger: Number,
  opponent: Number,
  money: Number,
  fuel_consumption: Number,
  winner: Number,
  status: String,
  forecast: String,
  weather: String,
})

export const Driver = mongoose.model('Driver', {
  _id: String,
  races_driven: Number,
  as_challenger: Number,
  as_opponent: Number,
  races_won: Number,
})
