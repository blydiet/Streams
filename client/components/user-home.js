import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {fetchStreams} from '../store/streams'
import displayContent from './stream-displayContent'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, streams} = props

  return (
    <div className="ui celled list">
      {/* <h3>Welcome, {email}</h3> */}
      {console.log(streams)}
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
