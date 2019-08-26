import React from 'react'
import ReactDOM from 'react-dom'
import Modal from './modal'
import {removeSteam} from '../store/streams'
class RemoveStream extends React.Component {
  constructor(props) {
    super(props)
    this.deleteStream = this.deleteStream.bind(this)
  }
  async deleteStream(streamToRemove) {
    await removeSteam(streamToRemove)
  }
  render() {
    return <Modal deleteStream={this.deleteStream} />
  }
}
const mapDispatchToProps = dispatch => ({
  removeSteam: id => dispatch(removeSteam(id))
})

export const DeleteStream = RemoveStream
