import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchStreams} from '../store/streams'
import DisplayContent from './stream-displayContent'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {streams} = props

  return (
    <div className="ui celled list">
      {/* <h3>Welcome, {email}</h3> */}
      {streams.map(stream => {
        return (
          <div className="item" key={stream.id}>
            <i className="large middle aligned icon camera" />
            <div className="content">
              <DisplayContent
                id={stream.id}
                title={stream.title}
                description={stream.description}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    streams: state.streams.allStreams
  }
}
const mapStateToDispatch = dispatch => ({
  fetchStreams: () => dispatch(fetchStreams())
})
export default connect(mapState, mapStateToDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
