import { Race } from '../model'

async function races(req, res) {
  try {
    const data = {}
    data.years = {}
    data.numberOf = await Race.count()
    const dates = await Race.find({}).distinct('race_created')
    dates.map(date => date.split('.')[2]).forEach((year) => {
      if (!Object.prototype.hasOwnProperty.call(data.years, year)) {
        data.years[year] = {
          n: 1,
          months: {},
        }
      } else {
        data.years[year].n += 1
      }
    })
    let i = 0
    Object.keys(data.years).forEach((year) => {
      while (i < dates.length && dates[i].split('.')[2] === year) {
        if (!Object.prototype.hasOwnProperty.call(data.years[year].months, dates[i].split('.')[1])) {
          data.years[year].months[dates[i].split('.')[1]] = 1
        } else {
          data.years[year].months[dates[i].split('.')[1]] += 1
        }
        i += 1
      }
    })
    res.send(data)
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e)
  }
}

export default races
