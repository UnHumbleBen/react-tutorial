import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  state = {
    animes: [
      {
        title: 'Dr. Stone',
        studio: 'TMS Entertainment',
      },
      {
        title: 'Fire Force',
        studio: 'David Production',
      },
      {
        title: 'Demon Slayer: Kimetsu no Yaiba',
        studio: 'Ufotable',
      },
      {
        title: 'Lord El-Melloi II\'s Case Files',
        studio: 'Troyca',
      },
    ],
  }

  removeAnime = index => {
    const { animes } = this.state

    this.setState({
      animes: animes.filter((anime, i) => {
        return i !== index
      }),
    })
  }

  render() {
    const { animes } = this.state
    return (
      <div className="container">
        <Table animeData={animes} removeAnime={this.removeAnime} />
        <Form handleSubmit={this.handleSubmit} />
      </div >
    )
  }

  handleSubmit = anime => {
    this.setState({ animes: [...this.state.animes, anime] })
  }
}

// class App extends Component {
//   state = {
//     data: [],
//   }

//   componentDidMount() {
//     const url =
//       'https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona&format=json&origin=*'

//     fetch(url)
//       .then(result => result.json())
//       .then(result => {
//         this.setState({
//           data: result,
//         })
//       })
//   }

//   render() {
//     const { data } = this.state

//     const result = data.map((entry, index) => {
//       return <li key={index}>{entry}</li>
//     })
//     return <ul>{result}</ul>
//   }
// }

export default App
