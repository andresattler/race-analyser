import mongoose from 'mongoose'

const Race = mongoose.model('Race', {
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

export default Race
