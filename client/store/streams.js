import axios from 'axios'
import history from '../history'

const GET_STREAMS = 'GET_STREAMS'
const GET_NEWSTREAM = 'GET_NEWSTREAM'
const GET_STREAM = 'GET_STREAM'
const REMOVE_STREAM = 'REMOVE_STREAM'
const EDIT_STREAM = 'EDIT_STREAM'
const streams = {
  allStreams: [],
  stream: {}
}

const getStream = stream => ({type: GET_STREAM, stream})
const getNewStream = stream => ({type: GET_NEWSTREAM, stream})
const getStreams = stream => ({type: GET_STREAMS, stream})
const deleteStream = streamId => ({type: REMOVE_STREAM, streamId})
const updateStream = (streamId, updatedStream) => ({
  type: EDIT_STREAM,
  streamId,
  updateStream
})
export const createStream = (title, description) => async (
  dispatch,
  getState
) => {
  try {
    const {user} = getState()
    let userId = user.id
    const {data} = await axios.post('/api/streams', {
      title,
      description,
      userId
    })
    dispatch(getNewStream(data))
    history.push('/streams')
  } catch (newStreamError) {
    console.log(newStreamError)
  }
}
export const fetchStream = streamId => async dispatch => {
  try {
    const {data} = await axios.get(`/api/streams/${streamId}`)
    dispatch(getStream(data))
  } catch (error) {
    console.log(error)
  }
}
export const fetchStreams = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/streams')
    dispatch(getStreams(data))
  } catch (error) {
    console.log(error)
  }
}

export const removeSteam = streamId => async dispatch => {
  try {
    await axios.delete(`/api/streams/delete/${streamId}`)
    dispatch(deleteStream(streamId))
    history.push('/streams')
  } catch (error) {
    console.log(error)
  }
}
export const streamUpdate = (
  streamId,
  title,
  description
) => async dispatch => {
  try {
    const {data} = await axios.put(`/api/streams/update/${streamId}`, {
      title,
      description
    })
    console.log(data)
    dispatch(updateStream(data))
    history.push('/streams')
  } catch (error) {
    console.log(error)
  }
}

export default function(state = streams, action) {
  switch (action.type) {
    case GET_NEWSTREAM:
      return action.stream
    case GET_STREAM:
      return {...state, stream: action.stream}
    case GET_STREAMS:
      return {...state, allStreams: action.stream}
    case REMOVE_STREAM:
      return {
        ...state,
        allStreams: state.allStreams.filter(
          streams => streams.id !== action.streamId
        )
      }
    case EDIT_STREAM:
      return {
        ...state,
        allStreams: state.allStreams.map(
          streams =>
            streams.id === action.streamId
              ? {...streams, stream: action.updateStream}
              : streams
        )
      }
    default:
      return state
  }
}
