import react from 'react'
import ReactDOM from 'react-dom'

const alertContainer = document.querySelector("#alert-root")

const AlertTag = ({ message, type, isOpened}) => {

    if (!isOpened) return null
    return ReactDOM.createPortal(
        <div>
            <div className = "closeContent" onClick = {(e) => {e.target.parentElement.style.display = 'none'}}>Close</div>
                <span>{message}</span>
        </div>,
        alertContainer
    )
}

export default AlertTag