import React from 'react'
import {fetchStreams} from '../store/streams'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {me} from '../store/user'

class Streams extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.fetchStreams()
    this.props.me()
  }
  render() {
    console.log()
    return (
      <div>
        <h1>Streams</h1>
        <div className="ui celled list">
          {this.props.streams
            ? this.props.streams.map(stream => {
                return (
                  <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                      <Link to="/streams/show">{stream.title}</Link>
                      <div>{stream.description}</div>
                      {stream.userId !== this.props.user.id ? null : (
                        <div>
                          <Link to={`/streams/edit${stream.id}`}>
                            <button>Edit</button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })
            : null}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  streams: state.streams.allStreams,
  user: state.user
})
const mapStateToDispatch = dispatch => ({
  fetchStreams: () => dispatch(fetchStreams()),
  me: () => dispatch(me())
})
export const StreamList = connect(mapStateToProps, mapStateToDispatch)(Streams)
