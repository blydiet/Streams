import React from 'react'
import StreamForm from './stream-form'
import {streamUpdate} from '../store/streams'
import {connect} from 'react-redux'
class UpdateStream extends React.Component {
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
    const id = Number(this.props.match.params.id)
    this.props.streamUpdate(id, title, description)
    this.setState({
      title: '',
      description: ''
    })
  }
  render() {
    return (
      <StreamForm
        edit={true}
        handleChange={this.handleChange}
        handleOnSubmit={this.handleOnSubmit}
        description={this.state.description}
        title={this.state.title}
      />
    )
  }
}
const DispatchMapStateToProps = dispatch => ({
  streamUpdate: (id, title, description) =>
    dispatch(streamUpdate(id, title, description))
})
export const StreamEdit = connect(null, DispatchMapStateToProps)(UpdateStream)
