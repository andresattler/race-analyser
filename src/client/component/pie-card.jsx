import React from 'react'
import { Link } from 'react-router-dom'
import { Pie } from 'react-chartjs-2'

const PieCard = ({ caption, data, labels }) => (
  <Link to={caption.toLowerCase()}>
    <div className="card">
      <h3>{caption}</h3>
      <Pie data={{
        datasets: [{
          data,
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
          ],
        }],
        labels,
      }}
      />
    </div>
  </Link>
)

export default PieCard
