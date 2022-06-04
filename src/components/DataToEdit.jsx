import React, { useState } from 'react'
import { EditButton } from './EditButton'
import './Modal.css'

const DataToEdit = ({ data, isOpen, closeModal, openModal }) => {
    const handleModalContainerClick = (e) => e.stopPropagation();   
    
    return (
        <div className='d-flex justify-content-between date' >
            <span>
                {data}
            </span>
            <span className='position-relative' onClick={openModal}>
                < EditButton url="" />
            </span>
                <article className={`modals ${isOpen && 'is-open'}`} onClick={closeModal}>
                    <div className="modal-container" onClick={handleModalContainerClick}>
                        <button className="modal-close" onClick={closeModal}>
                            X
                        </button>
                        <h2>{data}</h2>
                    </div>
                </article>
            
        </div>
    )
}

export default DataToEdit