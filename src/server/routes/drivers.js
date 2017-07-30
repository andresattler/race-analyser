import { Driver } from '../model'

async function drivers(req, res) {
  const data = {}
  data.numberOf = await Driver.count()
  data.topMostWon = await Driver.find().sort('-winns').limit(10)
  data.topMostDriven = await Driver.find().sort('-races_driven').limit(10)
  data.topMostChallenger = await Driver.find().sort('-as_challenger').limit(10)
  data.topMostOpponent = await Driver.find().sort('-as_opponent').limit(10)
  res.send(data)
}

export default drivers
