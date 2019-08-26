import React from 'react'
import ReactDOM from 'react-dom'

const ModalForDelete = ({deleteStream}) => {
  //onClick={ () => deleteStream()}
  return (
    <div>
      <div className="ui active icon header">
        Are you sure you want to delete this stream ?
      </div>
      <div className="actions">
        <span>
          <button
            onClick={() => deleteStream()}
            className="ui red cancel inverted button"
          >
            Delete{' '}
          </button>
        </span>
        <div className="ui primary ok inverted button">
          <i className="checkmark icon" />
          cancel
        </div>
      </div>
    </div>
  )
}
const Modal = ({deleteStream}) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active">
      <ModalForDelete deleteStream={deleteStream} />
    </div>,
    document.getElementById('modal')
  )
}
export default Modal
