import axios from 'axios'

const GET_STREAMS = 'NEW_STREAMS'
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
const removeStream = streamId => ({type: REMOVE_STREAM, streamId})
const updateStream = (streamId, updatedStream) => ({
  type: EDIT_STREAM,
  streamId,
  updateStream
})
export const createStream = (title, description) => async dispatch => {
  try {
    const {data} = await axios.post('/api/streams', {title, description})
    dispatch(getNewStream(data))
  } catch (newStreamError) {
    console.log(newStreamError)
  }
}
export const fetchStream = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/streams/:id')
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
    const removedSteam = await axios.delete(`/api/streams/${streamId}`)
    dispatch(removeSteam(streamId))
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
    const {data} = await axios.put(`/api/streams/${streamId}`, {
      title,
      description
    })
    dispatch(updateStream(data))
  } catch (error) {
    console.log(error)
  }
}

export default function(state = streams, action) {
  switch (action.type) {
    case GET_NEWSTREAM:
      return action.stream
    case GET_STREAM:
      return action.stream
    case GET_STREAMS:
      return {...state, allStreams: action.stream}
    case REMOVE_STREAM:
      return {
        ...state,
        allStreams: state.allStreams.filter(
          streams => stream.id !== action.streamId
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
