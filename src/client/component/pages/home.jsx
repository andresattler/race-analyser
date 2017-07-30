import React from 'react'

import NumberOfCard from '../number-of-card'
import PieCard from '../pie-card'

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
        <PieCard caption="Status" data={this.state.status} labels={['finished', 'declined', 'retired']} />
        <PieCard caption="Weather" data={this.state.weather} labels={['sunny', 'rainy', 'snowy', 'thundery']} />
      </div>
    )
  }
}

export default Home
