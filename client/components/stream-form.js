import React from 'react'
const StreamForm = ({
  edit,
  handleChange,
  handleOnSubmit,
  title,
  description
}) => {
  return (
    <form onSubmit={handleOnSubmit}>
      {edit === false ? (
        <label>Create a new stream:</label>
      ) : (
        <label>Edit a stream:</label>
      )}

      <input type="text" name="title" value={title} onChange={handleChange} />
      <label>Description:</label>
      <textarea
        name="description"
        value={description}
        onChange={handleChange}
      />
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
export default StreamForm
