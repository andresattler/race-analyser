import React from 'react'
import { Link } from 'react-router-dom'

const NumberOfCard = ({ caption, number }) => (
  <Link to={caption.toLowerCase()}>
    <div className="card">
      <h3>{caption}</h3>
      <p>Number of {caption}: {number}</p>
    </div>
  </Link>
)

export default NumberOfCard
