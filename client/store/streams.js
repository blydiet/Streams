import axios from 'axios'

const GET_STREAM = 'NEW_STREAM'

const streams = {
  stream: []
}

const getStream = stream => ({type: GET_STREAM, stream})

export const createStream = (title, description) => async dispatch => {
  try {
    const res = await axios.post('/api/streams', {title, description})
    console.log(res)
    dispatch(getStream(res.data))
  } catch (newStreamError) {
    console.log(newStreamError)
  }
}

export default function(state = streams, action) {
  switch (action.type) {
    case GET_STREAM:
      return action.stream
    default:
      return state
  }
}
