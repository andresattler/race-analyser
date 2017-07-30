import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

class Races extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOf: 0,
      years: {},
      selectYear: '',
    }
  }
  componentDidMount() {
    fetch('/api/races')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          ...data,
          selectYear: Object.keys(data.years)[0],
        })
      })
  }
  render() {
    const selectYear = (e) => {
      this.setState({
        selectYear: e.target.value,
      })
    }
    return (
      <div className="content">
        <p>Number of races: {this.state.numberOf}</p>
        <HorizontalBar data={{
          labels: Object.keys(this.state.years),
          datasets: [
            {
              label: 'Races created',
              data: Object.values(this.state.years).map(obj => obj.n),
              backgroundColor: 'rgba(66, 133, 244, 0.5)',
            },
          ] }}
        />
        <select onChange={selectYear}>
          {Object.keys(this.state.years).map(year => <option key={year}>{year}</option>)}
        </select>
        <HorizontalBar data={{
          labels: Object.keys(this.state.years),
          datasets: [
            {
              label: `Races created ${this.state.selectYear}`,
              data: this.state.selectYear ? Object.entries(this.state.years[this.state.selectYear].months).sort().map(m => m[1]) : [],
              backgroundColor: 'rgba(66, 133, 244, 0.5)',
            },
          ] }}
        />
      </div>
    )
  }
}

export default Races
