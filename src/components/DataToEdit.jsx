import React, { useState } from 'react'
import { EditButton } from './EditButton'
import './Modal.css'

const DataToEdit = ({ type, data, isOpen, closeModal, openModal }) => {
    const [dato, setDato] = useState(data)
    const handleModalContainerClick = (e) => e.stopPropagation();
    const changeData = (e) => {
        e.preventDefault()
        setDato(e.target.name.value)
        closeModal()
    }

    return (
        <div className='d-flex justify-content-between date' >
            <span>
                {dato}
            </span>
            <span className='position-relative' onClick={openModal}>
                < EditButton url="" />
            </span>
            <article className={`modals ${isOpen && 'is-open'}`} onClick={closeModal}>
                <div className="modal-container" onClick={handleModalContainerClick}>
                    <button className="modal-close" onClick={closeModal}>
                        X
                    </button>
                    <form onSubmit={changeData}>
                        <input
                            id='name'
                            type={type}
                            placeholder={dato}
                        />
                        <input type="submit" value="Guardar" />
                    </form>
                </div>
            </article>
        </div>
    )
}

export default DataToEdit