import React, { useState } from 'react'
import { useModal } from '../hooks/useModal'
import {EditButton }from './EditButton'
import Modal from './Modal'

const DataToEdit = ({data}) => {
    const [isOpenModal1, openModal1, closeModal1] = useModal(false)
    const [isOpenModal2, openModal2, closeModal2] = useModal(false)
    const [isOpenModal3, openModal3, closeModal3] = useModal(false)

    const [data1, setData] = useState(data)
  return (
    <div 
        className='d-flex justify-content-between date' 
    >
        <span>
            {data1}          
        </span>
        <span>
            
        </span>
        <span className='position-relative'>
            <Modal>
                < EditButton url=""/>
            </Modal>                                
        </span>
       
                   
    </div>
  )
}

export default DataToEdit