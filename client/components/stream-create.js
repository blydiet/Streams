import React from 'react'
import {createStream} from '../store/streams'
import {connect} from 'react-redux'

class NewStream extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleOnSubmit(event) {
    event.preventDefault()
    const title = this.state.title
    const description = this.state.description
    this.props.createStream(title, description)
    this.setState({
      title: '',
      description: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>Create a new stream:</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <label>Description:</label>
        <textarea
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    )
  }
}

const DispatchMapStateToProps = dispatch => ({
  createStream: (title, description) =>
    dispatch(createStream(title, description))
})
export const StreamCreate = connect(null, DispatchMapStateToProps)(NewStream)
