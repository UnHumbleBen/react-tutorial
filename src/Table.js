import React, { Component } from 'react'

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Anime</th>
        <th>Studio</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}

const TableBody = props => {
  const rows = props.animeData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.title}</td>
        <td>{row.studio}</td>
        <td>
          <button onClick={() => props.removeAnime(index)}>Delete</button>
        </td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

class Table extends Component {
  render() {
    const { animeData, removeAnime } = this.props;

    return (
      <table>
        <TableHeader />
        <TableBody animeData={animeData} removeAnime={removeAnime} />
      </table>
    )
  }
}

export default Table
