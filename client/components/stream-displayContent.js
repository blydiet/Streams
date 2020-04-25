import React from 'react'
import {Link} from 'react-router-dom'

const DisplayContent = ({id, title, description}) => {
  console.log(id)
  return (
    <div>
      <Link to={`/streams/show/${id}`}>{title}</Link>
      <div>{description}</div>
    </div>
  )
}
export default DisplayContent
