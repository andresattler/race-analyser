import { Driver } from '../model'

function drivers(req, res) {
  Driver.count()
    .then((nr) => {
      res.send({ nr })
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err)
    })
}

export default drivers
