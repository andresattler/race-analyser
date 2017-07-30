import React from 'react'

import Table from '../table'

class Drivers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOf: 0,
      topMostWon: [],
      topMostDriven: [],
      topMostChallenger: [],
      topMostOpponent: [],
    }
  }
  componentDidMount() {
    fetch('api/drivers')
      .then(res => res.json())
      .then((data) => {
        this.setState(data)
      })
  }
  render() {
    return (
      <div className="content">
        <h1>Drivers</h1>
        <h2>Number of Drivers</h2>
        {this.state.numberOf}
        <Table caption="top Drivers" data={this.state.topMostWon} title="Winns" />
        <Table caption="most driven Drivers" data={this.state.topMostDriven} title="Races driven" />
        <Table caption="most times Challenger" data={this.state.topMostChallenger} title="Driven as challenger" />
        <Table caption="most times Opponent" data={this.state.topMostOpponent} title="Driven as opponent" />
      </div>
    )
  }
}

export default Drivers
