import React, { useState } from 'react'
import { EditButton } from './EditButton'
//import Modal from './Modal'
import './Modal.css'

const DataToEdit = ({ data, isOpen, closeModal, openModal }) => {
       return (
        <div className='d-flex justify-content-between date' >
            <span>
                {data}
            </span>
            <span className='position-relative' onClick={openModal}>
                < EditButton url="" />
                <article className={`modals ${isOpen && 'is-open'}`} onClick={closeModal}>
                    <div className="modal-container">
                        <button className="modal-close" onClick={closeModal}>
                            X
                        </button>
                        <h2>{data}</h2>
                    </div>
                </article>
            </span>
        </div>
    )
}

export default DataToEdit