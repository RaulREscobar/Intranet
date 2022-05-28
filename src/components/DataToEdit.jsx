import React, { useState } from 'react'
import { EditButton } from './EditButton'
import Modal from './Modal'

const DataToEdit = ({ data, isOpen, closeModal, openModal}) => {
    const [data1, setData] = useState(data)
    return (
        <div className='d-flex justify-content-between date' >
            <span>
                {data1}
            </span>
            <span className='position-relative' onClick={openModal}>
                 < EditButton url="" />
                <Modal isOpen={isOpen} closeModal={closeModal}>
                   <h2>Aca Estoy</h2> 
                </Modal>
            </span>
        </div>
    )
}

export default DataToEdit