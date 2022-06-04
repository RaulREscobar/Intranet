import React, { useState } from 'react'
import { Input, FormGroup, Button, Form } from 'reactstrap'
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
            <article
                className={`modals ${isOpen && 'is-open'}`}
                onClick={closeModal}
            >
                <div
                    className="modal-container"
                    onClick={handleModalContainerClick}
                >
                    <Button
                        color='darck'
                        className="modal-close"
                        onClick={closeModal}
                    >
                        <i class="bi bi-x-square-fill"></i>
                    </Button>
                    < Form
                        onSubmit={changeData}
                        className="mt-4"
                    >
                        <FormGroup>
                            <Input
                                id='name'
                                type={type}
                                placeholder={dato}
                            />
                        </FormGroup>
                        < FormGroup>
                            <Input
                                type="submit"
                                className='bg-dark text-light'
                                value="Guardar"
                            />
                        </FormGroup>
                    </Form>
                </div>
            </article>
        </div>
    )
}

export default DataToEdit