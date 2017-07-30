import React from 'react'

const Table = props => (
  <table>
    <caption>{props.caption}</caption>
    <tbody>
      <tr>
        <th>id</th>
        <th>{props.title}</th>
      </tr>
      {props.data.map(d => (
        <tr key={d._id}>
          <td>{d._id}</td>
          <td>{d.winns}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

export default Table
