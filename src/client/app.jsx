import React from 'react'
import { Pie } from 'react-chartjs-2'

class App extends React.Component {
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
      .then(({ status, weather, numberOfRaces, numberOfDrivers }) => {
        this.setState({ status, weather, numberOfRaces, numberOfDrivers })
      })
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>Number of Races in Dataset</h3>
        <p>{this.state.numberOfRaces}</p>
        <h3>Number of Drivers in Dataset</h3>
        <p>{this.state.numberOfDrivers}</p>
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
    )
  }
}

export default App
