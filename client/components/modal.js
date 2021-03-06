import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import history from '../history'
const ModalForDelete = ({deleteStream, title, nameOfStream, renderContent}) => {
  //onClick={ () => deleteStream()}
  console.log(nameOfStream)
  return (
    <div
      className="ui standard modal visible active"
      onClick={event => event.stopPropagation()}
    >
      <div className="ui red header">{title}</div>
      <div className="content">
        {/* <p>Are you sure you want to delete this {nameOfStream.title} stream ?</p> */}
        {renderContent()}
      </div>
      <div className="actions">
        <button
          onClick={() => deleteStream()}
          className="ui red cancel inverted button"
        >
          Delete{' '}
        </button>

        <div className="ui primary ok inverted button">
          <Link to="/streams">
            <i className="checkmark icon" />
            cancel
          </Link>
        </div>
      </div>
    </div>
  )
}
const Modal = ({deleteStream, title, nameOfStream, renderContent}) => {
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push('/streams')}
      className="ui dimmer modals visible active"
    >
      <ModalForDelete
        deleteStream={deleteStream}
        title={title}
        nameOfStream={nameOfStream}
        renderContent={renderContent}
      />
    </div>,
    document.getElementById('modal')
  )
}
export default Modal
