import React from 'react'
import {createStream} from '../store/streams'
import {connect} from 'react-redux'
import StreamForm from './stream-form'

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
      <StreamForm
        edit={false}
        handleChange={this.handleChange}
        handleOnSubmit={this.handleOnSubmit}
        description={this.state.description}
        title={this.state.title}
      />
    )
  }
}

const DispatchMapStateToProps = dispatch => ({
  createStream: (title, description) =>
    dispatch(createStream(title, description))
})
export const StreamCreate = connect(null, DispatchMapStateToProps)(NewStream)
