import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../store/streams'
import flv from 'flv.js'
class StreamVideo extends React.Component {
  constructor(props) {
    super(props)
    this.videoref = React.createRef()
  }
  componentDidMount() {
    const ID = Number(this.props.match.params.id)
    this.props.fetchStream(ID)
    if (this.videoref.current !== null) {
      this.flvPlayer = flv.createPlayer({
        type: 'flv',
        url: `http://localhost:8000/live/${ID}.flv`
      })
      this.flvPlayer.attachMediaElement(this.videoref.current)
      this.flvPlayer.load()
    }
  }

  render() {
    if (!this.props.stream) {
      return 'Loading ...'
    } else {
      return (
        <div>
          <video ref={this.videoref} style={{width: `100%`}} controls />
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
