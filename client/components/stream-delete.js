import React from 'react'
import Modal from './modal'
import {removeSteam} from '../store/streams'
import {connect} from 'react-redux'
class RemoveStream extends React.Component {
  constructor(props) {
    super(props)
    this.deleteStream = this.deleteStream.bind(this)
    this.renderContent = this.renderContent.bind(this)
  }
  componentDidMount() {
    this.props.fetchStream(Number(this.props.match.params.id))
  }
  async deleteStream() {
    await this.props.removeSteam(Number(this.props.match.params.id))
  }
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream ?'
    } else {
      return `Are you sure you want to delete this ${
        this.props.stream.title
      } stream ?`
    }
  }
  render() {
    console.log(this.props)
    return (
      <Modal
        title="Delete Stream"
        deleteStream={this.deleteStream}
        nameOfStream={this.props.stream}
        renderContent={this.renderContent}
      />
    )
  }
}
const mapDispatchToProps = dispatch => ({
  removeSteam: id => dispatch(removeSteam(id)),
  fetchStream: id => dispatch(fetchStream(id))
})
const mapStateToProps = state => ({
  stream: state.streams.stream
})

export const DeleteStream = connect(mapStateToProps, mapDispatchToProps)(
  RemoveStream
)
