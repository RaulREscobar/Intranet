import React from 'react'
import BarNav from '../components/BarNav'
import User from '../components/User'
import TitleSection from '../components/TitleSection'
import DataToEdit from '../components/DataToEdit'
import { useModal } from '../hooks/useModal'


const EditProfile = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal()
  const [isOpenModalLastName, openModalLastName, closeModal2] = useModal()
  const [isOpenModal3, openModal3, closeModal3] = useModal()
  return (
    <div className=''>
      < TitleSection title="Hola Raul" />
      < User />
      <section className='bg-central pt-3' >
        < DataToEdit data="Raul" isOpen={isOpenModal1} closeModal={closeModal1} openModal={openModal1} />
        < DataToEdit data="Escobar" isOpen={isOpenModalLastName} closeModal={closeModal2} openModal={openModalLastName} />
        < DataToEdit data="21 de diciembre" isOpen={isOpenModal3} closeModal={closeModal3} openModal={openModal3} />
      </section>
      <BarNav />
    </div>
  )
}

export default EditProfile