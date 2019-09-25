import React from 'react'
import {connect} from 'react-redux'
import {fetchStream} from '../store/streams'
import flv from 'flv.js'
class StreamVideo extends React.Component {
  constructor(props) {
    super(props)
    this.videoref = React.createRef()
    this.buildFlvPlayer = this.buildFlvPlayer.bind(this)
  }
  componentDidMount() {
    const ID = Number(this.props.match.params.id)
    this.props.fetchStream(ID)
    this.buildFlvPlayer()
  }
  componentDidUpdate() {
    this.buildFlvPlayer()
  }
  componentWillUnmount() {
    this.flvPlayer.destroy()
  }
  buildFlvPlayer() {
    const ID = Number(this.props.match.params.id)
    if (!this.props.stream || this.flvPlayer) {
      return 'Loading...'
    } else {
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
