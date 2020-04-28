import React from 'react'
import {fetchStreams} from '../store/streams'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {me} from '../store/user'
import DisplayContent from './stream-displayContent'

class Streams extends React.Component {
  constructor(props) {
    super(props)
    this.createNewStream = this.createNewStream.bind(this)
  }
  componentDidMount() {
    this.props.fetchStreams()
    this.props.me()
  }
  createNewStream() {
    return (
      <div style={{textAlign: 'right'}}>
        <Link to="/streams/new">
          <button className="ui button primary">Create Stream</button>
        </Link>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h1>Streams</h1>
        <div id="display" className="ui celled list">
          {this.props.streams
            ? this.props.streams.map(stream => {
                return (
                  <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                      <DisplayContent
                        id={stream.id}
                        title={stream.title}
                        description={stream.description}
                      />
                      {stream.userId !== this.props.user.id ? null : (
                        <div className="right floated content">
                          <Link to={`/streams/edit/${stream.id}`}>
                            <button className="ui button primary">Edit</button>
                          </Link>
                          <Link to={`/streams/delete/${stream.id}`}>
                            <button className="ui button negative">
                              Delete
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })
            : null}
        </div>
        {this.props.user.id !== undefined ? this.createNewStream() : null}
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
