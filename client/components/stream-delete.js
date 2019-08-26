import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'
import {removeSteam} from '../store/streams'
import {connect} from 'react-redux'
class RemoveStream extends React.Component {
  constructor(props) {
    super(props)
    this.deleteStream = this.deleteStream.bind(this)
  }
  async deleteStream() {
    await this.props.removeSteam(Number(this.props.match.params.id))
  }
  render() {
    return <Modal deleteStream={this.deleteStream} />
  }
}
const mapDispatchToProps = dispatch => ({
  removeSteam: id => dispatch(removeSteam(id))
})

export const DeleteStream = connect(null, mapDispatchToProps)(RemoveStream)
