// import react from 'react'
import ReactDOM from 'react-dom'

const alertContainer = document.querySelector("#alert-root")

const AlertTag = ({ message, type, isOpened, onClose, success}) => {

    if (!isOpened) return null
    return ReactDOM.createPortal(
        <div className={`alert ${type}`}>
            <div className='btnClose' onClick={(e) => {e.target.parentElement.style.display='none'}}>
                    X
            </div>
            <span>{message}</span>
        </div>,
        alertContainer
    )
}

export default AlertTag