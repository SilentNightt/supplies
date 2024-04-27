import React from "react";
import './Model.css'

const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? "model active" : "model"} onClick={() => setActive(false)}>
            <div className={active ? "model__content active" : "model__content"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default Modal;