import React from 'react'

class Drivers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfDrivers: 0,
      bestDriver: 0,
      worstDriver: 0,
      mostDrivenDriver: 0,
    }
  }
  render() {
    return (
      <div className="content">
        <h1>Drivers</h1>
      </div>
    )
  }
}

export default Drivers
