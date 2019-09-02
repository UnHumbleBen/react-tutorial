import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      title: '',
      studio: '',
    }

    this.state = this.initialState
  }

  handleChange = event => {
    const { name, value } = event.target

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { title, studio } = this.state;

    return (
      <form>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.handleChange} />
        <label>Studio</label>
        <input
          type="text"
          name="studio"
          value={studio}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
}

export default Form;
