import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../store/streams'
import flv from 'flv.js'
class StreamVideo extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchStream(Number(this.props.match.params.id))
  }

  render() {
    if (!this.props.stream) {
      return 'Loading ...'
    } else {
      return (
        <div>
          <h1>{this.props.stream.title}</h1>
          <p>{this.props.stream.description}</p>
        </div>
      )
    }
    //return()
  }
}
const mapStateToProps = state => ({
  stream: state.streams.stream
})
const mapDispatchToProps = dispatch => ({
  fetchStream: id => dispatch(fetchStream(id))
})
export const StreamShow = connect(mapStateToProps, mapDispatchToProps)(
  StreamVideo
)
