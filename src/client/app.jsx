import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { number: 0 }
  }
  componentDidMount() {
    fetch('/api/count?key=weather&val=sunny', {
      method: 'GET' })
      .then(res => res.json())
      .then((data) => {
        this.setState({ number: data.number })
      })
  }
  render() {
    return (
      <div>
        <h3>Races with sunny weather</h3>
        <p>{this.state.number}</p>
      </div>
    )
  }
}

export default App
