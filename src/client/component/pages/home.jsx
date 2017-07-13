import React from 'react'
import { Pie } from 'react-chartjs-2'

import NumberOfCard from '../number-of-card'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      status: [],
      weather: [],
      numberOfRaces: 0,
      numberOfDrivers: 0,
    }
  }
  componentDidMount() {
    fetch('/api/count?key=weather&val=sunny', {
      method: 'GET' })
      .then(res => res.json())
      .then(({ number }) => {
        this.setState({ number })
      })
    fetch('/api/general', {
      method: 'GET' })
      .then(res => res.json())
      .then((data) => {
        this.setState(data)
      })
  }
  render() {
    return (
      <div className="content">
        <NumberOfCard caption="Races" number={this.state.numberOfRaces} />
        <NumberOfCard caption="Drivers" number={this.state.numberOfDrivers} />
        <NumberOfCard caption="Tracks" number={this.state.numberOfTracks} />
        <div className="card">
          <h3>Status</h3>
          <Pie data={{
            datasets: [{
              data: this.state.status,
              backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
              ],
            }],
            labels: [
              'finished',
              'declined',
              'retired',
            ],
          }}
          />
        </div>
        <div className="card">
          <h3>Weather</h3>
          <Pie data={{
            datasets: [{
              data: this.state.weather,
              backgroundColor: [
                '#FFCE56',
                '#36A2EB',
                '#FF6384',
              ],
            }],
            labels: [
              'sunny',
              'rainy',
              'snowy',
              'thundery',
            ],
          }}
          />
        </div>
      </div>
    )
  }
}

export default Home
